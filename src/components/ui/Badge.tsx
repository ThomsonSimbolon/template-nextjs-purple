import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full whitespace-nowrap';

  const variants = {
    success: 'bg-green-500/20 text-green-400 border border-green-500/50',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50',
    error: 'bg-red-500/20 text-red-400 border border-red-500/50',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/50',
    default: 'bg-primary/20 text-accent border border-primary/50',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm font-semibold',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
