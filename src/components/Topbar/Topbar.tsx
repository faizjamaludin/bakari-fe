import React from "react";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { SideDrawer } from "@/components";

export default function Topbar() {
  return (
    <div className="flex flex-row h-12 w-full items-center justify-between text-text-primary">
      <div className="flex flex-row gap-x-md">
        {/* drawer trigger */}
        <SideDrawer />
        {/* calendar */}
        <div className="flex flex-row items-center bg-background-primary px-md rounded-full gap-x-sm">
          <span className="rounded-full p-xs bg-background-secondary">
            <CalendarDays size={17} color="#2d71f8" />
          </span>
          <p>Wed, 29 May 2024</p>
        </div>

        {/* clock */}
        <div className="flex flex-row items-center bg-background-primary px-md rounded-full gap-x-sm">
          <span className="rounded-full p-xs bg-background-secondary">
            <Clock size={17} color="#2d71f8" />
          </span>
          <p>07:59 AM</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
