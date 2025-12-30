"use client";

import {
  Menu,
  Bell,
  ChevronDown,
  User,
  LogOut,
  PanelLeft,
  Moon,
  Sun,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileSidebarOpen, toggleSidebar } from "@/store/slices/uiSlice";
import { logout } from "@/store/slices/authSlice";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);
  const user = useAppSelector((state) => state.auth.user);
  const { theme, toggleTheme } = useTheme();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setProfileDropdownOpen(false);
    router.push("/signin");
  };

  return (
    <header className="h-[72px] bg-background-secondary border-b border-surface/40 backdrop-blur sticky top-0 z-30">
      <div className="h-full flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left: Sidebar Toggle (Desktop) + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Sidebar Toggle */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:flex p-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
            aria-label={
              sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            <PanelLeft className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => dispatch(setMobileSidebarOpen(true))}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotificationDropdownOpen(!notificationDropdownOpen);
                setProfileDropdownOpen(false);
              }}
              className="relative p-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
            >
              <Bell className="w-5 h-5" />
              {/* Badge */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>

            {/* Notification Dropdown */}
            {notificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-surface rounded-xl shadow-glow border border-primary/20 overflow-hidden">
                <div className="p-4 border-b border-background-secondary">
                  <h3 className="font-semibold text-white">Notifications</h3>
                </div>
                <div className="p-4 text-text-secondary text-sm">
                  No new notifications
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileDropdownOpen(!profileDropdownOpen);
                setNotificationDropdownOpen(false);
              }}
              className="flex items-center gap-2 p-2 pr-3 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block font-medium text-sm">
                {user?.name || "Admin User"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-surface rounded-xl shadow-glow border border-primary/20 overflow-hidden">
                <div className="p-3 border-b border-background-secondary">
                  <p className="font-medium text-white text-sm">
                    {user?.name || "Admin User"}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    {user?.email || "admin@example.com"}
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:bg-background-secondary hover:text-white transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
