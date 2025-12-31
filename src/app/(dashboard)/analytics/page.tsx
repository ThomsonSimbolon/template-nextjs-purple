"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { SkeletonCard, SkeletonLoader } from "@/components/ui/SkeletonLoader";
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react";

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] xl:max-w-[1440px] mx-auto">
        <div className="space-y-16">
          <PageHeader
            title="Analytics"
            description="View detailed metrics and performance insights"
          />

          {/* Analytics Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              // Skeleton loaders for 4 stat cards
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              // Actual stat cards
              <>
                <StatCard
                  title="Page Views"
                  value="124,582"
                  change={18.7}
                  icon={BarChart3}
                  trend="up"
                />
                <StatCard
                  title="Unique Visitors"
                  value="45,231"
                  change={12.3}
                  icon={Users}
                  trend="up"
                />
                <StatCard
                  title="Avg. Session"
                  value="5m 32s"
                  change={-2.4}
                  icon={Activity}
                  trend="down"
                />
                <StatCard
                  title="Conversion"
                  value="3.24%"
                  change={7.1}
                  icon={TrendingUp}
                  trend="up"
                />
              </>
            )}
          </div>

          {/* Analytics Overview Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Analytics Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {isLoading ? (
                // Skeleton loaders for chart placeholders
                <>
                  <SkeletonLoader variant="card" className="h-80" />
                  <SkeletonLoader variant="card" className="h-80" />
                </>
              ) : (
                // Actual chart placeholders
                <>
                  <div className="bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Traffic Overview
                    </h3>
                    <div className="h-64 flex items-center justify-center text-text-muted">
                      Chart Component Placeholder
                    </div>
                  </div>

                  <div className="bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      User Activity
                    </h3>
                    <div className="h-64 flex items-center justify-center text-text-muted">
                      Chart Component Placeholder
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
