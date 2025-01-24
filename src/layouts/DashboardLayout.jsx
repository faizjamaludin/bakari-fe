import React from "react";
import { Toaster } from "@/components/ui/sonner";

function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col w-full bg-background-secondary min-h-screen p-lg gap-y-lg">
      {children}
      <Toaster />
    </div>
  );
}

export default DashboardLayout;
