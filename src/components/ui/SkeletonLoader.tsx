import { cn } from "@/lib/utils";

export interface SkeletonLoaderProps {
  variant?: "text" | "card" | "table" | "circular";
  className?: string;
}

export function SkeletonLoader({
  variant = "text",
  className,
}: SkeletonLoaderProps) {
  const baseStyles =
    "animate-shimmer bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 bg-[length:1000px_100%]";

  const variants = {
    text: "h-4 rounded",
    card: "h-32 rounded-xl",
    table: "h-12 rounded",
    circular: "rounded-full aspect-square",
  };

  return <div className={cn(baseStyles, variants[variant], className)} />;
}

export function SkeletonCard() {
  return (
    <div className="bg-surface/70 backdrop-blur-md rounded-xl p-6 border border-primary/20">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <SkeletonLoader variant="text" className="w-24 mb-2" />
          <SkeletonLoader variant="text" className="w-32 h-8" />
        </div>
        <SkeletonLoader variant="circular" className="w-12 h-12" />
      </div>
      <SkeletonLoader variant="text" className="w-20" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonLoader key={i} variant="table" />
      ))}
    </div>
  );
}
