import { DashboardLayout } from "@/layouts";
import React from "react";
import Header from "./Header";
import Category from "./Category";
import MenuList from "./MenuList";

export default function POS() {
  return (
    <DashboardLayout>
      <Header />
      <Category />
      <MenuList />
    </DashboardLayout>
  );
}
