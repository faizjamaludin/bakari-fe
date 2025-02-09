import React from "react";
import {
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Tag } from "@/components";
import { TbMinus, TbPlus } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { IoMdClose } from "react-icons/io";

function MenuDetail() {
  return (
    <div className="flex flex-col items-center gap-y-md">
      <AlertDialogHeader className="w-full">
        <AlertDialogTitle className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-semibold">Detail Menu</h1>
          <AlertDialogCancel className="w-fit w-10 h-10 bg-background-red text-text-red hover:bg-text-red hover:text-background-red ease-in-out duration-200"><IoMdClose /></AlertDialogCancel>
        </AlertDialogTitle>
      </AlertDialogHeader>

      <div className="flex flex-col w-full gap-y-2xs">
        <div className="h-[200px] w-full bg-background-secondary rounded-md flex justify-center items-center p-[70px]">
          <img src="/img/chocoroll.png" className="object-fit" />
        </div>
        <Tag category="Pastry" />
        <h1 className="text-md font-semibold">Buttermelt Croissant</h1>
        <p className="text-sm text-text-caption">
          Premium butter croissant with a crispy pastry crust and soft inside will melt away on your
          mouth!
        </p>
        <p className="text-lg text-text-blue font-semibold">RM 4.00</p>
        <Textarea
          type="text"
          className="border text-sm bg-background-secondary"
          placeholder="Add notes to your order..."
        />
        <span className="p-xs bg-background-secondary rounded-full flex flex-row gap-x-md justify-between">
          <Button variant="icon-sm" size="icon-sm">
            <TbMinus />
          </Button>
          <p className="font-medium">1</p>
          <Button variant="icon-sm" size="icon-sm">
            <TbPlus />
          </Button>
        </span>
      </div>

      <AlertDialogFooter className="w-full">
        <Button variant="primary" className="w-full">
          Add to Cart
        </Button>
      </AlertDialogFooter>
    </div>
  );
}

export default MenuDetail;
