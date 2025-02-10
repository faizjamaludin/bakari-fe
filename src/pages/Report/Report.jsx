import React from "react";
import Option from "./Option/Option";
import { DashboardLayout } from "@/layouts";
import TotalCard from "./TotalCard/TotalCard";
import Graph from "./Graph/Graph";
import AllOrder from "./AllOrder/AllOrder";
import { DashboardHeader } from "@/components";

function Report() {
  return (
    <DashboardLayout>
      <DashboardHeader title="Report" />
      <Option />
      <TotalCard />
      <Graph />
      <AllOrder />
    </DashboardLayout>
  );
}

export default Report;
