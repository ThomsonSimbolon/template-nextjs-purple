'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';
import { usePermissions } from '@/hooks/usePermissions';

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

export function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);
  const { can } = usePermissions();

  // Filter navigation items based on permissions
  const visibleNavItems = navigationItems.filter((item) => {
    if (item.id === 'users') return can('canViewUsers');
    if (item.id === 'analytics') return can('canViewAnalytics');
    if (item.id === 'settings') return can('canManageSettings');
    return true; // Dashboard visible to all authenticated users
  });

  return (
    <aside
      className={cn(
        'hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-surface/30 backdrop-blur-md border-r border-primary/20 transition-all duration-300 z-40',
        sidebarCollapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="min-h-[72px] flex items-center justify-center border-b border-surface/30 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          {!sidebarCollapsed && (
            <span className="font-bold text-lg text-gradient">Dashboard</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-4">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-primary text-white font-semibold'
                      : 'text-text-secondary hover:bg-surface/40 hover:text-text-primary',
                    sidebarCollapsed ? 'justify-center' : ''
                  )}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
