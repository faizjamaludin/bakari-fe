import { Table } from "@/components";
import { allOrderColumn } from "@/components/Table/columns";
import { allOrderData } from "@/components/Table/data";
import React from "react";

function AllOrder() {
  return (
    <div className="flex flex-col bg-background-primary p-md rounded-sm">
      <h1 className="px-lg py-xl font-medium text-lg">All Orders</h1>
      <Table data={allOrderData} columns={allOrderColumn} />
    </div>
  );
}

export default AllOrder;
