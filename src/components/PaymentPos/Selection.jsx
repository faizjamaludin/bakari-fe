import React from "react";
import { SelectOption } from "..";

export default function Selection() {
  return (
    <div className="flex flex-row p-lg py-md gap-x-lg shadow-sm">
      <SelectOption placeholder="Select Table" />
      <SelectOption placeholder="Order Type" />
    </div>
  );
}
