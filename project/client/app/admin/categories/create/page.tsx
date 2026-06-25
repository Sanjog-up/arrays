import PageTitle from '@/components/admin/page-title'
import React from 'react'

const CategoryCreatePage = () => {
  return (
    <main className='h-full'>
      <PageTitle
      title='Add Category'
      linkText='Go back'
      link='/admin/categories'
      />
    </main>
  )
}

export default CategoryCreatePage
