import { LucideIcon } from 'lucide-react';

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

// Stats card types
export interface StatCardData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

// Table column types
export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

// Toast notification types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

// Modal types
export interface ModalState {
  isOpen: boolean;
  type?: string;
  data?: any;
}
