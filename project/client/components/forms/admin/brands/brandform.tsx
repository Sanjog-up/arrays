"use client";
import Input from "@/components/common/ui/input";
import { useForm } from "react-hook-form";
import AdminListCard from "../list-card";
import Button from "@/components/common/ui/button";
import ImageInput from "@/components/common/ui/image-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { brandSchema, TBrabdInput } from "@/schema/brand.schema";

const BrandForm = () => {
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      logo: undefined,
      
    },
    resolver:yupResolver(brandSchema)
  });

  const onSumbit = (data:TBrabdInput)=>{
    console.log(data)
  }
  return (
    <AdminListCard>
      <div>
        <h4 className="text-[18px] font-semibold text-black/80 my-8">
          Brand Form
        </h4>

        <form onSubmit={handleSubmit(onSumbit)} className="max-w-120 mx-auto flex gap-4 flex-col border border-gray-200 px-4 py-10 rounded-md">
          <Input
            label="Name"
            name="name"
            type="text"
            id={"name"}
            error={errors?.name?.message}
            placeholder="Caliber"
            register={register}
            required
          />
          <Input
            label="Descrption"
            name="description"
            type="text"
            id={"description"}
            placeholder="Describe your brand [at least 25 chars]"
            register={register}
            error={errors?.description?.message}
            required
            multiline={true}
          />

          <ImageInput  label="logo" id="brand_logo"
           />
          <div>
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </AdminListCard>
  );
};
export default BrandForm;
