import React from "react";
import { PiBreadThin } from "react-icons/pi";

export default function CategoryCard({ category, quantity }) {
  return (
    <div
      className={`w-36 h-32 rounded-xl flex flex-col p-lg bg-background-primary justify-between`}
    >
      <PiBreadThin className="w-9 h-9 bg-background-secondary text-zinc-500 rounded-full p-xs" />
      <div className="flex flex-col">
        <p className="text-text-primary font-medium">{category}</p>
        <span className="text-text-caption text-sm font-medium">
          {quantity} items
        </span>
      </div>
    </div>
  );
}
