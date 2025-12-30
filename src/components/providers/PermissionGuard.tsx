'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePermissions } from '@/hooks/usePermissions';
import { LoadingState } from '@/components/ui/LoadingState';
import { useAppSelector } from '@/store/hooks';

interface PermissionGuardProps {
  children: React.ReactNode;
  permission: 'canViewUsers' | 'canViewAnalytics' | 'canManageSettings';
  redirectTo?: string;
}

export function PermissionGuard({
  children,
  permission,
  redirectTo = '/',
}: PermissionGuardProps) {
  const router = useRouter();
  const { can } = usePermissions();
  const loading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    if (!loading && !can(permission)) {
      router.push(redirectTo);
    }
  }, [can, permission, redirectTo, router, loading]);

  // Show loading while checking permissions
  if (loading) {
    return <LoadingState message="Checking permissions..." fullScreen />;
  }

  // Show loading while redirecting
  if (!can(permission)) {
    return <LoadingState message="Redirecting..." fullScreen />;
  }

  // Render protected content
  return <>{children}</>;
}
