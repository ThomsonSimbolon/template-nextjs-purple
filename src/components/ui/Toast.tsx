'use client';

import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeToast } from '@/store/slices/uiSlice';
import { cn } from '@/lib/utils';
import { ToastType } from '@/types';

const icons: Record<ToastType, typeof CheckCircle> = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const variants: Record<ToastType, string> = {
  success: 'bg-green-500/20 border-green-500/30 text-green-400',
  error: 'bg-red-500/20 border-red-500/30 text-red-400',
  warning: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
  info: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
};

export function Toast() {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector((state) => state.ui.toasts);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];

        return (
          <ToastItem
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            duration={toast.duration || 5000}
            Icon={Icon}
            onClose={() => dispatch(removeToast(toast.id))}
          />
        );
      })}
    </div>
  );
}

interface ToastItemProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration: number;
  Icon: typeof CheckCircle;
  onClose: () => void;
}

function ToastItem({ id, type, title, message, duration, Icon, onClose }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border shadow-lg backdrop-blur-sm animate-slide-in pointer-events-auto',
        variants[type]
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm">{title}</h4>
        {message && <p className="text-sm text-text-secondary mt-1">{message}</p>}
      </div>

      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
