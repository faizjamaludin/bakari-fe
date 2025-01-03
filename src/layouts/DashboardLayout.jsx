import { PaymentPos } from "@/components";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className={`grid grid-cols-[1fr,_500px]`}>
      <div className="flex flex-col p-lg bg-background-secondary gap-y-lg overflow-hidden">
        {children}
      </div>
      <PaymentPos />
    </div>
  );
}
