import { Button } from "@/components/ui/button";
import { categoryActivity } from "@/constant";
import React from "react";

export default function CategoryBar() {
  return (
    <div className="flex flex-row justify-between w-full bg-background-primary rounded-sm p-xs">
      <div className="flex flex-row gap-x-sm">
        {categoryActivity.map((category) => (
          <Button key={category.name} variant="category" size="fit">
            {category.name}
          </Button>
        ))}
      </div>
      <div className="flex flex-row">
        <div className="bg-background-blue text-text-blue w-32 flex items-center justify-center rounded-full">
          4 Active Que
        </div>
      </div>
    </div>
  );
}
