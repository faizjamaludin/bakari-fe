import { Sidebar, TopbarDashboard } from "@/components";
import type { LayoutProps } from "@/interface";
import React from "react";

export default function DashboardLayout({ children, className }: LayoutProps) {
  return (
    <div className="flex flex-col bg-background-secondary gap-y-md p-sm">
      {/* topbar */}
      <TopbarDashboard />
      <div className="flex flex-row h-[calc(100vh-5.5rem)] gap-x-md">
        <div className="w-80">
          <Sidebar />
        </div>
        <div className={`flex flex-col w-full ${className}`}>{children}</div>
      </div>
    </div>
  );
}
