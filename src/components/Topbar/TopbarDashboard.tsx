import React from "react";
import SideDrawer from "../Drawer/SideDrawer";
import { CalendarDays, Clock } from "lucide-react";

export default function TopbarDashboard() {
  return (
    <div className="flex flex-row h-12 w-full items-center justify-between text-text-primary">
      <div className="flex flex-row gap-x-md">
        {/* drawer trigger */}
        <SideDrawer />
        {/* calendar */}
        <div className="flex flex-row items-center gap-x-sm">
          <p className="font-medium">Activity</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
