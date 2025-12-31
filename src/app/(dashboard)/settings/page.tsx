'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { User, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] xl:max-w-[1440px] mx-auto">
        <div className="space-y-16">
          <PageHeader
            title="Settings"
            description="Manage your account settings and preferences"
          />

          <div className="space-y-16">
            {/* Profile Settings */}
            <div className="bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@example.com"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Role
                  </label>
                  <Badge variant="error">Admin</Badge>
                </div>

                <div className="pt-4">
                  <Button variant="primary">Save Changes</Button>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-white">Notifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Email Notifications</p>
                    <p className="text-sm text-text-secondary mt-1">
                      Receive email updates about your account activity
                    </p>
                  </div>
                  <button
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      notificationsEnabled ? 'bg-primary' : 'bg-surface'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        notificationsEnabled ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-surface/70 backdrop-blur-md rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold text-white">Security</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <Button variant="primary">Update Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
