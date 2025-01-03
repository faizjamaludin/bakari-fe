import React from "react";
import { GoPencil } from "react-icons/go";
import { TbMinus, TbPlus } from "react-icons/tb";

export default function Item() {
  return (
    <div className="grid grid-cols-[140px,_1fr] gap-x-md my-lg">
      <div className="h-24 p-xl flex justify-center items-center bg-background-secondary rounded-xl">
        <img src="/img/sandwich.png" alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="font-medium">Beef Cronwich</p>
          <p className="text-text-caption text-sm">RM 5.50</p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="bg-background-secondary p-xs rounded-full">
            <GoPencil className="bg-background-primary rounded-full w-6 h-6 p-2xs" />
          </span>
          <span className="p-xs bg-background-secondary rounded-full flex flex-row gap-x-md">
            <TbMinus className="bg-background-primary rounded-full w-6 h-6 p-2xs" />
            <p>1</p>
            <TbPlus className="bg-background-primary rounded-full w-6 h-6 p-2xs" />
          </span>
        </div>
      </div>
    </div>
  );
}
