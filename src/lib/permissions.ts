export type UserRole = 'admin' | 'moderator' | 'user';

export interface Permission {
  canViewUsers: boolean;
  canEditUsers: boolean;
  canDeleteUsers: boolean;
  canViewAnalytics: boolean;
  canManageSettings: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission> = {
  admin: {
    canViewUsers: true,
    canEditUsers: true,
    canDeleteUsers: true,
    canViewAnalytics: true,
    canManageSettings: true,
  },
  moderator: {
    canViewUsers: true,
    canEditUsers: true,
    canDeleteUsers: false, // Moderators cannot delete
    canViewAnalytics: true,
    canManageSettings: false, // Moderators cannot manage settings
  },
  user: {
    canViewUsers: false,
    canEditUsers: false,
    canDeleteUsers: false,
    canViewAnalytics: false,
    canManageSettings: false,
  },
};

export function hasPermission(
  role: UserRole,
  permission: keyof Permission
): boolean {
  return ROLE_PERMISSIONS[role][permission];
}
