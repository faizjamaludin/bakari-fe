import React from "react";
import { Button } from "../ui/button";
import { CookingPot } from "lucide-react";

export default function CategoryCard() {
  return (
    <>
      <Button variant="category-card-active" size="category-card" className="">
        <span className="rounded-full p-sm bg-text-blue">
          <CookingPot size={17} color="#FFFFFF" />
        </span>
        <div className="flex flex-col text-text-primary">
          <p className="text-md">All Menu</p>
          <p className="text-md text-text-caption">110 Items</p>
        </div>
      </Button>
    </>
  );
}
