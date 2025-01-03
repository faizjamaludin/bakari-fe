import React from "react";

export default function Tag({ category }) {
  const tagColor = (category) => {
    switch (category) {
      case "Sandwich":
        return "bg-background-orange text-text-orange";
      case "Pastry":
        return "bg-background-success text-text-success";
    }
  };

  return (
    <div
      className={`text-[11px] ${tagColor(
        category
      )} rounded-full px-sm py-2xs place-self-center font-medium`}
    >
      {category}
    </div>
  );
}
