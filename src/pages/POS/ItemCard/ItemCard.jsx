import { Tag } from "@/components";
import React from "react";

export default function ItemCard({ category }) {
  return (
    <div className="flex flex-col w-full h-56 gap-y-xs rounded-xl p-sm bg-background-primary">
      <div className="bg-background-secondary w-full h-full flex justify-center items-center p-xl rounded-lg">
        <img src="/img/sandwich.png" alt="" />
      </div>
      <p className="font-medium text-md">Beef Crowich</p>
      <div className="flex flex-row justify-between">
        <Tag category={category} />
        <p className="font-semibold text-md">RM 5.50</p>
      </div>
    </div>
  );
}
