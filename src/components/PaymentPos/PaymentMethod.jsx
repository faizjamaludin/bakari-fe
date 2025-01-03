import React from "react";
import { Button } from "../ui/button";

export default function PaymentMethod() {
  return (
    <div className="flex flex-col gap-y-md shadow-md">
      <div className="flex flex-row px-lg items-center gap-x-md">
        <span className="flex flex-row p-xs bg-background-secondary rounded-full">
          <input
            type="text"
            placeholder="Add Promo or Voucher"
            className="bg-background-secondary rounded-full px-md text-sm outline-none"
          />
          <span className="w-8 h-8 rounded-full border bg-background-primary"></span>
        </span>
        <Button variant="primary" size="primary">
          Payment Method
        </Button>
      </div>

      <Button variant="order" size="order">
        Place Order
      </Button>
    </div>
  );
}
