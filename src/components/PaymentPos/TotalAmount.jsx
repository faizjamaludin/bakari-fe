import React from "react";
import { Separator } from "@/components/ui/separator";

export default function TotalAmount() {
  return (
    <div className="flex flex-col p-lg gap-y-md">
      <div className="flex flex-row justify-between text-text-caption font-medium text-xl">
        <p>Subtotal</p>
        <p>RM 0.00</p>
      </div>
      <div className="flex flex-row justify-between text-text-caption font-medium text-md">
        <p>Tax 10%</p>
        <p>RM 0.00</p>
      </div>

      <Separator />

      <div className="flex flex-row justify-between text-text-primary font-medium text-2xl">
        <p>Total</p>
        <p>RM 0.00</p>
      </div>
    </div>
  );
}
