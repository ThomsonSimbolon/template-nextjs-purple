import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  trend?: 'up' | 'down';
}

export function StatCard({ title, value, change, icon: Icon, trend = 'up' }: StatCardProps) {
  const isPositive = change >= 0;
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <div className="group bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-glow min-h-[180px] flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-text-muted text-xs font-semibold uppercase tracking-wider">{title}</p>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mt-3">{value}</h3>
          
          <div className="flex items-center gap-1.5 mt-4">
            <TrendIcon
              className={cn(
                'w-4 h-4',
                isPositive ? 'text-green-400' : 'text-red-400'
              )}
            />
            <span
              className={cn(
                'text-sm font-semibold',
                isPositive ? 'text-green-400' : 'text-red-400'
              )}
            >
              {isPositive ? '+' : ''}{change}%
            </span>
            <span className="text-text-muted text-xs ml-1">vs last month</span>
          </div>
        </div>

        <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center shrink-0 shadow-glow">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
