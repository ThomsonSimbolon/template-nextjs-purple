"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-surface/30 mt-20">
      <div className="max-w-[1280px] xl:max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span>
              © {currentYear} Purple AI Dashboard. All rights reserved.
            </span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary text-sm">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
