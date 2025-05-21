import React from "react";
import { POSLayout } from "@/layouts";
import { CategoryCard, InputSearchMenu, MenuCard, Topbar } from "@/components";

export default function POS() {
  return (
    <POSLayout className="bg-background-secondary gap-y-md">
      <div className="">
        <Topbar />
      </div>
      <CategoryCard />
      <InputSearchMenu />
      <div className="flex flex-row flex-wrap gap-md">
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
        <MenuCard name="Beef Crowich" category="Sandwich" price={5.5} />
      </div>
    </POSLayout>
  );
}
