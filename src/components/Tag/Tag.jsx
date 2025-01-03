import React from "react";

export default function Tag({ category }) {
  const tagColor = (category) => {
    switch (category) {
      case "Sandwich":
        return "bg-background-orange text-text-orange";
      case "Pastry":
        return "bg-background-success text-text-success";
      case "Donut":
        return "bg-background-cream text-text-cream";
      case "Cake":
        return "bg-background-red text-text-red";
      case "Bread":
        return "bg-background-blue text-text-blue";
      case "Tart":
        return "bg-background-purple text-text-purple";
    }
  };

  return (
    <div
      className={`text-[11px] ${tagColor(
        category
      )} rounded-full px-sm py-2xs place-self-center font-semibold`}
    >
      {category}
    </div>
  );
}
