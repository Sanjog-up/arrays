import React from 'react'
import PageTitle from '@/components/admin/page-title'
import BrandList from '@/components/admin/brand/list'
import BrandForm from '@/components/admin/brand/brandform'
const Brands = () => {
  return (
    <main className='h-full'>
      <PageTitle
      title='All Brands'
      linkText='Add new'
      link='/admin/brands/create'
      />
      <BrandList/>
      
    </main>
  )
}

export default Brands
