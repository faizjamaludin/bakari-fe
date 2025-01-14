import { DrawerMenu } from "@/components";
import React from "react";
import { RxCalendar } from "react-icons/rx";
import { PiClock } from "react-icons/pi";
import { LuPower } from "react-icons/lu";
import dateFormat from "dateformat";



export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-x-lg">
        <DrawerMenu />
        <div className="rounded-full bg-background-primary py-xs px-2xl flex flex-row items-center gap-x-md text-sm font-medium">
          <RxCalendar className="w-9 h-9 rounded-full bg-background-blue p-md text-text-blue" />
          {dateFormat(new Date(), "ddd d mmm yyyy")}
        </div>
        <div className="rounded-full bg-background-primary py-xs px-2xl flex flex-row items-center gap-x-md text-sm font-medium">
          <PiClock className="w-9 h-9 rounded-full bg-background-blue p-md text-text-blue" />
          {dateFormat(new Date(), "h:MM TT")}
        </div>
      </div>
      <span className='flex flex-row gap-x-lg items-center bg-background-primary rounded-full px-lg py-md text-sm font-medium text-text-success'>
        Open Order <LuPower className='bg-background-success w-8 h-8 p-sm rounded-full' />
      </span>
    </div>
  );
}
