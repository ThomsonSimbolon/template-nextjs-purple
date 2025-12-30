import { useAppSelector } from '@/store/hooks';
import { hasPermission, Permission } from '@/lib/permissions';

export function usePermissions() {
  const user = useAppSelector((state) => state.auth.user);
  
  const can = (permission: keyof Permission): boolean => {
    if (!user) return false;
    return hasPermission(user.role, permission);
  };

  return { can, role: user?.role };
}
