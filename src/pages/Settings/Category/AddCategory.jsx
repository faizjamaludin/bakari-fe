import { Button } from "@/components/ui/button";
import { useCreateCategoryMutation } from "@/lib/features/api/categoryApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function AddCategory() {
  const { register, handleSubmit } = useForm();
  const [createCategory, result] = useCreateCategoryMutation();

  useEffect(() => {
    if (result.isSuccess) {
      toast("Category created successfully");
    }
  }, [result]);

  const onSubmit = (data) => {
    createCategory({
      name: data.categoryName,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row items-center gap-x-lg"
    >
      <input
        {...register("categoryName")}
        type="text"
        placeholder="Create new category..."
        className="flex flex-1 h-10 rounded-full p-lg outline-0"
      />
      <Button type="submit" variant="action">
        Add Category
      </Button>
    </form>
  );
}

export default AddCategory;
