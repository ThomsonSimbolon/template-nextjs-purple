'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/slices/authSlice';
import { addToast } from '@/store/slices/uiSlice';

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate authentication API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Map email to role for demo purposes
      const roleMap: Record<string, 'admin' | 'moderator' | 'user'> = {
        'admin@example.com': 'admin',
        'moderator@example.com': 'moderator',
        'user@example.com': 'user',
      };

      const role = roleMap[email] || 'user';

      // Dispatch user with role
      dispatch(
        setUser({
          id: Date.now().toString(),
          name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
          email: email,
          role: role,
        })
      );

      // Success toast
      dispatch(
        addToast({
          id: Date.now().toString(),
          type: 'success',
          title: 'Login successful',
          message: `Welcome back, ${role}!`,
        })
      );

      // Redirect to dashboard
      router.push('/');
    } catch (error) {
      // Handle error with toast
      dispatch(
        addToast({
          id: Date.now().toString(),
          type: 'error',
          title: 'Login failed',
          message: 'Invalid credentials. Please try again.',
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-surface rounded-xl border border-primary/20 shadow-sm">
        <div className="px-4 md:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-text-secondary">Sign in to your account to continue</p>
          <p className="text-text-muted text-xs mt-2">
            Demo: admin@example.com | moderator@example.com | user@example.com
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-primary/20 bg-background text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              />
              <span className="text-sm text-text-secondary">Remember me</span>
            </label>

            <Link
              href="#"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-text-secondary">
          Don't have an account?{' '}
          <Link href="/signup" className="text-accent hover:text-accent/80 transition-colors">
            Sign up
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
