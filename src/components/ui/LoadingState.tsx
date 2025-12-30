import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export function LoadingState({ 
  message = 'Loading...', 
  size = 'md',
  fullScreen = false 
}: LoadingStateProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const container = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50'
    : 'flex flex-col items-center justify-center py-12';

  return (
    <div className={container}>
      <Loader2 className={cn('text-primary animate-spin', sizes[size])} />
      <p className="text-text-secondary text-sm mt-4">{message}</p>
    </div>
  );
}
