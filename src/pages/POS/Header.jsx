import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex-flex-row w-full">
        <HiOutlineMenuAlt4 className="  bg-background-primary rounded-full w-12 h-12 p-sm text-primary" />
      </div>
      <div></div>
    </div>
  );
}
