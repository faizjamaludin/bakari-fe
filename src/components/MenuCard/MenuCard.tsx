import React from "react";
import type { ProductMenuProps } from "@/interface";

export default function MenuCard({
  name,
  category,
  price,
  image,
}: ProductMenuProps) {
  return (
    <div className="flex flex-col bg-background-primary h-60 w-52 rounded-md p-md">
      <div className="flex bg-background-secondary h-full rounded-sm"></div>
      <p className="my-xs text-md">{name}</p>
      <div className="flex flex-row justify-between">
        <span className="text-sm">{category}</span>
        <span>RM {price.toFixed(2)}</span>
      </div>
    </div>
  );
}
