import { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileSidebar } from '@/components/layout/MobileSidebar';
import { Navbar } from '@/components/layout/Navbar';
import { Toast } from '@/components/ui/Toast';
import { AuthGuard } from '@/components/providers/AuthGuard';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <div className="sidebar-offset transition-all duration-300">
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
