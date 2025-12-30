'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setUser, setLoading } from '@/store/slices/authSlice';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Hydrate auth state from localStorage on client mount
    const hydrateAuth = () => {
      try {
        const stored = localStorage.getItem('auth_user');
        if (stored) {
          const user = JSON.parse(stored);
          dispatch(setUser(user));
        }
      } catch (error) {
        console.error('Failed to hydrate auth state:', error);
      } finally {
        // Set loading to false after hydration attempt
        dispatch(setLoading(false));
      }
    };

    hydrateAuth();
  }, [dispatch]);

  return <>{children}</>;
}
