'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  // Don't render auth pages if authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen gradient-purple-soft flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-lg py-8">
        {children}
      </div>
    </div>
  );
}
