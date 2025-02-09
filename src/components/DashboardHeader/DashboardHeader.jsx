import React from "react";
import { DrawerMenu } from "..";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuCalendarDays, LuPower } from "react-icons/lu";

function DashboardHeader({ title }) {
  return (
    <div className="w-full h-12 flex justify-between items-center">
      <div className="flex flex-row items-center gap-x-lg">
        <DrawerMenu />

        <span className="text-xl">{title}</span>
      </div>

      <div className="flex flex-row gap-x-lg">
        <span className="flex flex-row gap-x-lg items-center bg-background-primary rounded-full px-lg py-md text-sm font-medium">
          Download{" "}
          <MdOutlineFileDownload className="bg-blue-500 w-8 h-8 p-sm rounded-full text-white" />
        </span>

        <span className="flex flex-row gap-x-lg items-center bg-background-primary rounded-full px-lg py-md text-sm font-medium">
          Wed 29 May 2024{" "}
          <LuCalendarDays className="bg-background-blue w-8 h-8 p-sm rounded-full text-text-blue" />
        </span>

        <span className="flex flex-row gap-x-lg items-center bg-background-primary rounded-full px-lg py-md text-sm font-medium text-text-success">
          Open Order <LuPower className="bg-background-success w-8 h-8 p-sm rounded-full" />
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
