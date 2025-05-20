import React from "react";
import { POSLayout } from "@/layouts";
import { CategoryCard, InputSearchMenu, Topbar } from "@/components";

export default function POS() {
  return (
    <POSLayout className="bg-background-secondary">
      <Topbar />
      <div className="flex flex-col gap-y-md">
        <CategoryCard />
        <InputSearchMenu />
      </div>
    </POSLayout>
  );
}
