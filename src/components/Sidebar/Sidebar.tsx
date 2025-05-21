import React from "react";
import { activityMenu } from "./data/sidebarData";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-y-xs">
      {activityMenu.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="p-4 bg-background-primary rounded-md font-medium hover:bg-text-blue hover:text-background-primary transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
