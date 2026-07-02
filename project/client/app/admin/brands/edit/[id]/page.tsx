'use client'

import BrandForm from "@/components/forms/admin/brands/brandform";
import PageTitle from "@/components/forms/admin/page-title";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const EditBrandPage = () => {
  const { id } = useParams<{id: string}>();

  const { data: brand, isLoading, error } = useQuery({
     queryKey: ["brand", id],
    queryFn: async () => {
      const response = await axios.get(`/brands/${id}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }



  return (
    <main className="h-full">
      <PageTitle
        title="Edit brand"
        linkText="Go Back"
        link="/admin/brands"
      />
      <BrandForm defaultValues={brand} brandId={id} />
    </main>
  );
};

export default EditBrandPage;