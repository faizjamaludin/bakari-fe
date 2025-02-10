import { Table } from "@/components";
import { Button } from "@/components/ui/button";
import { Inventory } from "@/pages";
import React from "react";

function AllProducts() {
  return (
    <Inventory>
      <div className="flex flex-col">
        <Button variant="action" className="w-fit">
          Add Product
        </Button>
        {/* <Table /> */}
      </div>
    </Inventory>
  );
}

export default AllProducts;
