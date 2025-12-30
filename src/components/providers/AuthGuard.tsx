'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { LoadingState } from '@/components/ui/LoadingState';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/signin');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading while checking auth
  if (loading) {
    return <LoadingState message="Checking authentication..." fullScreen />;
  }

  // Show loading while redirecting
  if (!isAuthenticated) {
    return <LoadingState message="Redirecting to login..." fullScreen />;
  }

  // Render protected content
  return <>{children}</>;
}
