"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { SkeletonTable } from "@/components/ui/SkeletonLoader";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Table, TableColumn } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { User } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUsers, deleteUser } from "@/store/slices/userSlice";
import { addToast } from "@/store/slices/uiSlice";
import { useEffect } from "react";
import { usePermissions } from "@/hooks/usePermissions";
import { PermissionGuard } from "@/components/providers/PermissionGuard";

export default function UsersPage() {
  return (
    <PermissionGuard permission="canViewUsers">
      <UsersPageContent />
    </PermissionGuard>
  );
}

function UsersPageContent() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);
  const { can } = usePermissions();
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!userToDelete) return;

    setIsDeleting(true);
    // Simulate async delete
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(deleteUser(userToDelete.id));
    dispatch(
      addToast({
        id: Date.now().toString(),
        type: "success",
        title: "User deleted",
        message: `${userToDelete.name} has been removed.`,
      })
    );

    setIsDeleting(false);
    setDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const userColumns: TableColumn<User>[] = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
      render: (value: User["role"]) => {
        const variantMap = {
          admin: "error" as const,
          moderator: "warning" as const,
          user: "info" as const,
        };
        return <Badge variant={variantMap[value]}>{value}</Badge>;
      },
    },
    {
      key: "status",
      label: "Status",
      render: (value: User["status"]) => {
        return (
          <Badge variant={value === "active" ? "success" : "default"}>
            {value}
          </Badge>
        );
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, user: User) => (
        <div className="flex items-center gap-2">
          {can("canEditUsers") && (
            <button
              className="p-2 rounded-lg text-text-secondary hover:bg-surface hover:text-white transition-colors"
              title="Edit user"
            >
              <Edit className="w-4 h-4" />
            </button>
          )}
          {can("canDeleteUsers") && (
            <button
              onClick={() => handleDeleteClick(user)}
              className="p-2 rounded-lg text-text-secondary hover:bg-red-500/20 hover:text-red-400 transition-colors"
              title="Delete user"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] xl:max-w-[1440px] mx-auto">
        <div className="space-y-16">
          <PageHeader
            title="Users Management"
            description="Manage user accounts and permissions"
            actions={
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            }
          />

          {/* Search and Filters */}
          <div>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface/70 backdrop-blur-md rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-surface/70 backdrop-blur-md rounded-xl border border-primary/20 overflow-hidden shadow-sm hover:shadow-glow transition-shadow duration-300">
            {loading ? (
              <SkeletonTable rows={5} />
            ) : filteredUsers.length === 0 ? (
              <EmptyState
                title="No users found"
                description={
                  searchQuery
                    ? `No users match "${searchQuery}". Try a different search.`
                    : "Get started by adding your first user."
                }
                action={{
                  label: "Add User",
                  onClick: () => console.log("Add user"),
                }}
              />
            ) : (
              <Table data={filteredUsers} columns={userColumns} />
            )}
          </div>

          {/* Delete Confirmation Dialog */}
          <ConfirmDialog
            isOpen={deleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
            onConfirm={handleConfirmDelete}
            title="Delete User"
            message={`Are you sure you want to delete "${userToDelete?.name}"? This action cannot be undone.`}
            confirmText="Delete"
            cancelText="Cancel"
            isLoading={isDeleting}
          />
        </div>
      </div>
    </div>
  );
}
