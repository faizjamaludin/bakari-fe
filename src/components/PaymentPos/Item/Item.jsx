import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { TbMinus, TbPlus } from "react-icons/tb";
import { Modal, MenuDetail } from "@/components";

export default function Item() {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
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
          <span className="p-xs bg-background-secondary rounded-full flex">
            <Modal
              open={
                <Button variant="icon-sm" size="icon-sm">
                  <GoPencil />
                </Button>
              }
              content={<MenuDetail />}
            />
          </span>
          <span className="p-xs bg-background-secondary rounded-full flex flex-row gap-x-md">
            <Button variant="icon-sm" size="icon-sm" onClick={handleMinus}>
              <TbMinus />
            </Button>
            <p>{quantity}</p>
            <Button variant="icon-sm" size="icon-sm" onClick={handleAdd}>
              <TbPlus />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
