import { DashboardLayout } from "@/layouts";
import React from "react";
import { DashboardHeader, SidebarMenu } from "@/components";
import { activityMenuList } from "@/components/SidebarMenu/config/activityMenuList";

function Activity({ children }) {
  return (
    <DashboardLayout>
      <DashboardHeader title="Activity" />
      <div className="grid grid-cols-[300px,_1fr] gap-x-lg">
        <SidebarMenu menuList={activityMenuList} />
        {children}
      </div>
    </DashboardLayout>
  );
}

export default Activity;
