import { Button } from "@/components/ui/button";
import { categoryActivity } from "@/constant";
import { DashboardLayout } from "@/layouts";
import React from "react";
import CategoryBar from "./CategoryBar";
import OrderList from "./OrderList";
import { Separator } from "@/components/ui/separator";
import TrackOrder from "./TrackOrder";

export default function BillingQue() {
  return (
    <DashboardLayout className="gap-y-md">
      {/* category */}
      <CategoryBar />
      <div className="flex-1">
        <OrderList />
      </div>
      <div className="h-80">
        <TrackOrder />
      </div>
    </DashboardLayout>
  );
}
