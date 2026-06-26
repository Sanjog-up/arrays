"use client";
import Input from "@/components/common/ui/input";
import { register } from "module";
import React from "react";
import { useForm } from "react-hook-form";
import AdminListCard from "@/components/forms/admin/list-card";
import Button from "@/components/common/ui/button";
import ImageInput from "@/components/common/ui/image-input";

const CategoryForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      logo: null,
      category: "",
    },
  });
  return (
    <AdminListCard>
      <div>
        <h4 className="text-[18px] font-semibold text-black/80 my-8">
          Category Form
        </h4>

        <form className="max-w-120 mx-auto flex gap-4 flex-col border border-gray-200 px-4 py-10 rounded-md">
          <Input
            label="Name"
            name="name"
            type="text"
            id={"name"}
            placeholder="Caliber"
            register={register}
            required
          />
          {/* <Input
        label='Descrption'
        name='description'
        type='text'
        id={'description'}
        placeholder='Describe your brand [at least 25 chars]'
        register={register}
        required
        multiline={true}
        
        /> */}

          <Input
            label="Category"
            name="category"
            type="text"
            id={"category"}
            placeholder="categorize your product"
            register={register}
            required
            multiline={false}
          />

          <ImageInput label="product" id="products_category" />
          <div>
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </AdminListCard>
  );
};
export default CategoryForm;
