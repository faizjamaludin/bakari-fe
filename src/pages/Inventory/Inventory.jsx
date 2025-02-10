import { DashboardHeader, SidebarMenu } from "@/components";
import { inventoryMenuList } from "@/components/SidebarMenu/config/inventoryMenuList";
import { DashboardLayout } from "@/layouts";
import React from "react";

function Inventory({ children }) {
  return (
    <DashboardLayout>
      <DashboardHeader title="Inventory" />
      <div className="grid grid-cols-[300px,_1fr] gap-x-lg">
        <SidebarMenu menuList={inventoryMenuList} />
        {children}
      </div>
    </DashboardLayout>
  );
}

export default Inventory;
