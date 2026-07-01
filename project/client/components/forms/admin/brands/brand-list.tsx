'use client'

import React from "react";
import AdminListCard from "../list-card";
import Table from "./table";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { MdEditDocument } from "react-icons/md";

const BrandList = () => {

  const defaultData= [
    {
      name: 'Brand 1',
      description: 'description category ',
      logo:{
        path:'/next.svg',
        public_id:'/next.svg'
      },
      created_at: '07-01-2026',
      updated_at: '07-01-2026',
    },
    {
      name: 'Brand 2',
      description: 'description category ',
      logo:{
        path:'/next.svg',
        public_id:'/next.svg'
      },
      created_at: '07-01-2026',
      updated_at: '07-01-2026',
    },
  ]
  
  const columnHelper = createColumnHelper<any>()
  
  const columns = [
    columnHelper.accessor((row)=> row.name, {
      id:'name',
      cell:(info) => <strong><i>{info.getValue()}</i></strong>,
      header: () => <span className='text-lg'>Name</span>,
    }),
    columnHelper.accessor((row)=> row.logo, {
      id:'logo',
      cell:(info) => {
       console.log(info.row.original.name)
        return (
          <div className="h-16 max-w-20 mx-auto ">
            <Image
              src={info.getValue().path}
              alt={`${info.row.original.name}-logo`}
              width={100}
              height={100}
              className='object-contain h-full w-full'
            />  
          </div>
        )
      },
      header: () => <span>Logo</span>,
    }),
    columnHelper.accessor((row)=> row.description, {
      id:'description',
      cell:(info) => <i>{info.getValue()}</i>,
      header: () => <span>Description</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row)=> row.created_at, {
      id:'created_at',
      cell:(info) => <i>{info.getValue()}</i>,
      header: () => <span>Created At</span>,
      footer: (info) => info.column.id,
    }),

        columnHelper.accessor((row)=> row, {
      id:'_',
      cell:(info) => <div className='flex gap-2 justify-center'>
        <CiTrash title="Delete" className='text-red-500 text-[20px] cursor-pointer'/>
        <MdEditDocument title="Edit" className='text-blue-500 text-[20px] cursor-pointer'/>
      </div>,
      header: () => <span>Actions</span>,
   
    }),
  ]
  
  
  return (
    <AdminListCard>
      <h4 className="text-[18px] font-semibold text-black-500">Brand Lists</h4>

      {/* table */}
      <div className= 'w-full h-full rounded-sm'>
      <Table 
      data= {defaultData}
      columns= {columns}
      />
      </div>

    </AdminListCard>
  );
};

export default BrandList;
