import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ItemCard from "./ItemCard/ItemCard";

export default function MenuList() {
  console.log(screen.width);
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
      <div className="grid laptop:grid-cols-5 desktop:grid-cols-7 gap-xl">
        <ItemCard
          name="Beef Crowich"
          category="Sandwich"
          img="/img/sandwich.png"
        />
        <ItemCard
          name="Buttermelt Croissant"
          category="Pastry"
          img="/img/croissant.png"
        />
        <ItemCard
          name="Cereal Cream Donut"
          category="Donut"
          img="/img/donut.png"
        />
        <ItemCard
          name="Cheesy Cheesecake"
          category="Cake"
          img="/img/cheesecake.png"
        />
        <ItemCard
          name="Cheezy Sourdough"
          category="Bread"
          img="/img/sourdough.png"
        />
        <ItemCard name="Egg Tart" category="Tart" img="/img/eggtart.png" />
        <ItemCard
          name="Grains Pan Bread"
          category="Bread"
          img="/img/bread.png"
        />
        <ItemCard
          name="Cereal Cream Donut"
          category="Donut"
          img="/img/donut.png"
        />
        <ItemCard name="Egg Tart" category="Tart" img="/img/eggtart.png" />
        <ItemCard
          name="Beef Crowich"
          category="Sandwich"
          img="/img/sandwich.png"
        />
        <ItemCard
          name="Buttermelt Croissant"
          category="Pastry"
          img="/img/croissant.png"
        />
        <ItemCard
          name="Grains Pan Bread"
          category="Bread"
          img="/img/bread.png"
        />
        <ItemCard
          name="Cheesy Cheesecake"
          category="Cake"
          img="/img/cheesecake.png"
        />
      </div>
    </div>
  );
}
