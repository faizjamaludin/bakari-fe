import { DrawerMenu } from "@/components";
import React, { useEffect, useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { PiClock } from "react-icons/pi";
import { LuPower } from "react-icons/lu";
import dateFormat from "dateformat";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [openClose, setOpenClose] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleOpenClose = () => {
    setOpenClose(!openClose);
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-x-lg">
        <DrawerMenu />
        <div className="rounded-full bg-background-primary py-xs px-2xl flex flex-row items-center gap-x-md text-sm font-medium">
          <RxCalendar className="w-9 h-9 rounded-full bg-background-blue p-md text-text-blue" />
          {dateFormat(time, "ddd d mmm yyyy")}
        </div>
        <div className="rounded-full bg-background-primary py-xs px-2xl flex flex-row items-center gap-x-md text-sm font-medium">
          <PiClock className="w-9 h-9 rounded-full bg-background-blue p-md text-text-blue" />
          {dateFormat(time, "h:MM TT")}
        </div>
      </div>
      {openClose ? (
        <Button variant="open" onClick={handleOpenClose}>
          Open Order
          <span className="w-8 h-8 flex items-center justify-center bg-background-success rounded-full ">
            <LuPower />
          </span>
        </Button>
      ) : (
        <Button variant="close" onClick={handleOpenClose}>
          Close Order
          <span className="w-8 h-8 flex items-center justify-center bg-background-red rounded-full ">
            <LuPower />
          </span>
        </Button>
      )}
    </div>
  );
}
