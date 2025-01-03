import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import Selection from "./Selection";
import TotalAmount from "./TotalAmount";
import PaymentMethod from "./PaymentMethod";

export default function PaymentPos() {
  return (
    <div className="w-full h-screen flex flex-col shadow">
      <Header />
      <Selection />
      <ListItem />
      <TotalAmount />
      <PaymentMethod />
    </div>
  );
}
