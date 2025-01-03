import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

export default function Category() {
  return (
    <div className="overflow-x-auto px-0 scroll-hidden">
      <div className="flex flex-row gap-x-md min-w-max">
        <CategoryCard category="All Menu" quantity={110} />
        <CategoryCard category="Breads" quantity={20} />
        <CategoryCard category="Cakes" quantity={20} />
        <CategoryCard category="Donuts" quantity={110} />
        <CategoryCard category="Pastries" quantity={110} />
        <CategoryCard category="Sandwich" quantity={110} />
        <CategoryCard category="Tart" quantity={110} />
        <CategoryCard category="Lasagna" quantity={110} />
        <CategoryCard category="Beverages" quantity={110} />
        <CategoryCard category="Coffee" quantity={110} />
      </div>
    </div>
  );
}
