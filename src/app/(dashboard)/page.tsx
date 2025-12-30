"use client";

import { useState, useEffect } from "react";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Table, TableColumn } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { SkeletonCard, SkeletonTable } from "@/components/ui/SkeletonLoader";

// Mock data for recent activity
interface Activity {
  id: string;
  user: string;
  action: string;
  status: "completed" | "pending" | "failed";
  date: string;
}

const recentActivity: Activity[] = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new project",
    status: "completed",
    date: "2 minutes ago",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated user profile",
    status: "completed",
    date: "15 minutes ago",
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "Deleted old files",
    status: "pending",
    date: "1 hour ago",
  },
  {
    id: "4",
    user: "Sarah Williams",
    action: "Exported analytics data",
    status: "completed",
    date: "2 hours ago",
  },
];

const activityColumns: TableColumn<Activity>[] = [
  {
    key: "user",
    label: "User",
  },
  {
    key: "action",
    label: "Action",
  },
  {
    key: "status",
    label: "Status",
    render: (value: Activity["status"]) => {
      const variantMap = {
        completed: "success" as const,
        pending: "warning" as const,
        failed: "error" as const,
      };
      return <Badge variant={variantMap[value]}>{value}</Badge>;
    },
  },
  {
    key: "date",
    label: "Time",
  },
];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] xl:max-w-[1440px] mx-auto">
        <div className="space-y-16">
          <PageHeader
            title="Dashboard"
            description="Welcome back! Here's what's happening today."
          />

          {/* Stats Grid */}
          <section>
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
                    title="Total Revenue"
                    value="$45,231"
                    change={12.5}
                    icon={DollarSign}
                    trend="up"
                  />
                  <StatCard
                    title="Total Users"
                    value="2,345"
                    change={8.2}
                    icon={Users}
                    trend="up"
                  />
                  <StatCard
                    title="Total Orders"
                    value="1,234"
                    change={-3.1}
                    icon={ShoppingCart}
                    trend="down"
                  />
                  <StatCard
                    title="Growth Rate"
                    value="23.5%"
                    change={5.7}
                    icon={TrendingUp}
                    trend="up"
                  />
                </>
              )}
            </div>
          </section>

          {/* Recent Activity Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Recent Activity
            </h2>
            <div className="bg-surface rounded-xl border border-primary/20 overflow-hidden shadow-sm hover:shadow-glow transition-shadow duration-300">
              {isLoading ? (
                <SkeletonTable rows={4} />
              ) : (
                <Table data={recentActivity} columns={activityColumns} />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
