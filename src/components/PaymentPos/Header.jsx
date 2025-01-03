import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-between p-lg shadow-md">
      <span className="w-16 h-16 rounded-full bg-background-secondary"></span>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-text-caption font-medium">
          Cashier's Name
        </h1>
        <p className="text-md text-text-caption">Order Number: #000</p>
      </div>
      <span className="w-16 h-16 rounded-full bg-background-secondary"></span>
    </div>
  );
}
