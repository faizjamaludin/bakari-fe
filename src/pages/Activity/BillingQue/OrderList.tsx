import { Separator } from "@/components/ui/separator";
import React from "react";

export default function OrderList() {
  return (
    <div className="h-full bg-background-primary rounded-sm">
      {/* container start here */}
      <div className="flex flex-row justify-between p-xs">
        {/* details */}
        <div className="flex flex-col text-text-primary">
          <p className="font-medium text-lg">Francois</p>
          <p className="text-text-caption">
            Order Number : <span className="text-text-primary">#006</span>
          </p>
          <p className="text-text-caption">
            Table : <span className="text-text-primary">06</span>
          </p>
          <p className="text-text-caption font-medium pt-md">
            Wed, 29 May 2024 09:15 AM
          </p>
        </div>
        {/* price */}
        <div className="flex flex-col text-text-primary justify-center">
          <h1 className="font-semibold text-lg">RM 20.00</h1>
          <span className="bg-background-blue text-text-blue py-xs px-lg rounded-full text-center text-sm font-medium">
            Active
          </span>
        </div>
      </div>
      <Separator />
    </div>
  );
}
