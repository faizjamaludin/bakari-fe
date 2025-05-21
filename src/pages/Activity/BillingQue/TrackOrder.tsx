import React from "react";

export default function TrackOrder() {
  return (
    <div className="flex flex-col bg-background-primary rounded-sm h-full text-text-primary ">
      <div className="flex flex-row justify-between h-14 items-center shadow-md p-sm">
        {/* title */}
        <h1 className="font-semibold text-lg">Track Order</h1>
      </div>
      <div className="flex flex-row overflow-x-auto h-full gap-x-sm p-sm">
        {/* content */}
        <div className="flex flex-col border rounded-md w-64 p-sm">
          {/* name and status */}
          <span className="flex flex-row justify-between items-center">
            <h1 className="font-medium text-lg">Mike</h1>
            <span className="text-sm bg-background-secondary rounded-full px-md text-text-secondary">
              On Kitchen Hand
            </span>
          </span>

          {/* table and time */}
          <span className="text-text-caption">Table : 06</span>
          <span className="text-text-caption">09:15 AM</span>
          {/* dashed border */}
          <span className="border border-dashed my-xxs"></span>
          <div className="flex flex-col text-text-caption">
            <p>1x Beef Crowich</p>
            <p>1x Grains Pan Bread</p>
            <p>1x Cheezy Sourdough</p>
            <p>1x Sliced Black Forest</p>
          </div>
          <div className="flex flex-row justify-between flex-1 items-center text-text-caption font-medium">
            <p>Total Order</p>
            <p className="font-medium">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
