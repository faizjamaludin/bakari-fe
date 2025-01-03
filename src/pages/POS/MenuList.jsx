import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ItemCard from "./ItemCard/ItemCard";

export default function MenuList() {
  return (
    <div className="flex flex-col gap-y-md">
      {/* search bar */}
      <div className="flex flex-row items-center w-full px-lg py-md  bg-background-primary rounded-full">
        <input
          placeholder="Search something sweet on your mind..."
          className="rounded-full w-full outline-none"
        />
        <AiOutlineSearch className="w-10 h-10 p-sm rounded-full bg-background-secondary" />
      </div>
      <div className="grid grid-cols-7 gap-xl">
        <ItemCard category="Sandwich" />
        <ItemCard category="Pastry" />
        <ItemCard category="Sandwich" />
        <ItemCard category="Pastry" />
        <ItemCard category="Sandwich" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
        <ItemCard category="Pastry" />
      </div>
    </div>
  );
}
