'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    router.push('/signin');
  };

  const getPasswordStrength = () => {
    if (password.length === 0) return { label: '', color: '' };
    if (password.length < 6) return { label: 'Weak', color: 'text-red-400' };
    if (password.length < 10) return { label: 'Medium', color: 'text-yellow-400' };
    return { label: 'Strong', color: 'text-green-400' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="w-full">
      <div className="bg-surface rounded-xl p-8 border border-primary/20 shadow-glow">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-4 shadow-glow">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-text-secondary">Sign up to get started with your dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
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
              minLength={6}
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
            {password && (
              <p className={`text-sm mt-1 ${strength.color}`}>
                Password strength: {strength.label}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-primary/20 bg-background text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              />
              <span className="text-sm text-text-secondary">
                I agree to the{' '}
                <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link href="/signin" className="text-accent hover:text-accent/80 transition-colors">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
