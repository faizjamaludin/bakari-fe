import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Equal } from "lucide-react";
import { Link } from "react-router";
import { menuData } from "./data/menuData";

export default function SideDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-sm bg-background-primary w-full rounded-full">
          <Equal size={25} color="#2d71f8" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="h-12">header</SheetHeader>
        {/* content */}
        <div className="flex flex-col h-[calc(100vh-9rem)] justify-center">
          {menuData.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex flex-row items-center gap-x-sm p-sm rounded-md hover:bg-background-blue hover:text-text-blue group transition duration-200 ease-out hover:ease-in"
            >
              <div className="rounded-full p-sm bg-background-secondary group-hover:bg-text-blue transition duration-200 ease-out group-hover:ease-in">
                <item.icon
                  size={20}
                  className="text-text-blue group-hover:text-background-primary transition duration-200 ease-out group-hover:ease-in"
                />
              </div>
              <p className="font-medium">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="h-12">footer</div>
        {/* footer */}
      </SheetContent>
    </Sheet>
  );
}
