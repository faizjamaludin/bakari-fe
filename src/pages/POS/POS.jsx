import { PosLayout } from "@/layouts";
import React from "react";
import Header from "./Header";
import Category from "./Category";
import MenuList from "./MenuList";

export default function POS() {
  return (
    <PosLayout>
      <Header />
      <Category />
      <MenuList />
    </PosLayout>
  );
}
