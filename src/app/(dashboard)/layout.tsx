'use client';

import { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileSidebar } from '@/components/layout/MobileSidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Toast } from '@/components/ui/Toast';
import { AuthGuard } from '@/components/providers/AuthGuard';
import { useAppSelector } from '@/store/hooks';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "sidebar-offset-collapsed" : "sidebar-offset"
      )}>
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>

      {/* Toast Notifications */}
      <Toast />
    </div>
    </AuthGuard>
  );
}
