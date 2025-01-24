import React, { useEffect } from "react";
import { Table } from "@/components";
import Settings from "../Settings";
import AddCategory from "./AddCategory";
import { categoryColumn } from "@/components/Table/columns";
import { useGetCategoriesQuery } from "@/lib/features/api/categoryApi";

function Category() {
  const { data: category = [] } = useGetCategoriesQuery();

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <Settings>
      <div className="flex flex-col gap-y-lg">
        <AddCategory />

        <div className="bg-background-primary p-xs rounded-sm">
          <Table data={category} columns={categoryColumn} />
        </div>
      </div>
    </Settings>
  );
}

export default Category;
