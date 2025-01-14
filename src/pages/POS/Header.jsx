import { DrawerMenu } from "@/components";
import React from "react";


export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex-flex-row w-full">
        <DrawerMenu />

      </div>
      <div></div>
    </div>
  );
}
