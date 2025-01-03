import { Tag } from "@/components";
import React from "react";

export default function ItemCard({ name, category, img }) {
  return (
    <div className="flex flex-col w-full h-56 gap-y-xs rounded-xl p-sm bg-background-primary">
      <div className="bg-background-secondary w-full h-36 flex justify-center items-center p-xl rounded-lg ">
        <img src={img} alt="" className="h-42 object-contain" />
      </div>
      <p className="font-medium text-md">{name}</p>
      <div className="flex flex-row justify-between">
        <Tag category={category} />
        <p className="font-semibold text-md">RM 5.50</p>
      </div>
    </div>
  );
}
