import PageTitle from '@/components/admin/page-title'
import React from 'react'

const Categories = () => {
  return (
    <main>
     <PageTitle
     title='All Categories'
     linkText='Add New'
     link='/admin/categories/create'
     />
    </main>
  )
}

export default Categories
