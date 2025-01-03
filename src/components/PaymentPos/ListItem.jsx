import React from "react";
import Item from "./Item/Item";
import { Separator } from "../ui/separator";

export default function ListItem() {
  return (
    <div className="flex flex-col h-full px-lg">
      <Item />
      <Separator className="border-dashed" />
      <Item />
      <Separator className="border-dashed" />
      <Item />
      <Separator className="border-dashed" />
    </div>
  );
}
