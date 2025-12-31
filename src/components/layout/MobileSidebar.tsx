'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMobileSidebarOpen } from '@/store/slices/uiSlice';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    id: 'users',
    label: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileSidebarOpen);

  const closeSidebar = () => {
    dispatch(setMobileSidebarOpen(false));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface/30 backdrop-blur-md border-r border-primary/20 z-50 lg:hidden animate-slide-in">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-surface/30">
          <Link href="/" className="flex items-center gap-2" onClick={closeSidebar}>
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gradient">Dashboard</span>
          </Link>

          <button
            onClick={closeSidebar}
            className="p-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                      isActive
                        ? 'bg-primary/50 text-white font-semibold shadow-[inset_0_0_12px_rgba(91,49,214,0.3)]'
                        : 'text-text-secondary hover:bg-primary/20 hover:text-white hover:shadow-[inset_0_0_8px_rgba(91,49,214,0.2)]'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
