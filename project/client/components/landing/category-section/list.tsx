import React from 'react'
import CategoryCard from './catefory-card'
import { TCategory } from '@/types/category.types'

const categoryData:TCategory = {
    name: 'Category Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi maiores suscipit fugiat quam corporis amet accusantium. Ratione doloribus neque nihil, harum laboriosam suscipit sint hic id reiciendis dolor quo?',
    image:{
        _id: '1',
        public_id: '1',
        path: '/hero.jpg',
        
    },
    category: "category"
}
const CategoryList = () => {
    const categories = Array.from({ length: 12},(_, i) => i +1)
    console.log(categories)

  return (
    <div className='grid grid-cols-5 gap-4'>
      {categories.map((category) => <CategoryCard category={categoryData} key={category}/>)}
    </div>
  )
}

export default CategoryList
