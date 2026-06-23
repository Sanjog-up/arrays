import Link from 'next/link'
import React from 'react'
import { RiDashboardHorizontalFill } from "react-icons/ri";

const links=[
    {
        link:'/admin',
        label:'Dashboard',
        icon:<RiDashboardHorizontalFill size={26}
         />
    },
    {
        link:'/admin/brands',
        label:'Brands',
        icon:<RiDashboardHorizontalFill  size={26}/>
    },
    {
         link:'/admin/categories',
        label:'Categories',
        icon:<RiDashboardHorizontalFill  size={26}/>
    },
    {
         link:'/admin/products',
        label:'Products',
        icon:<RiDashboardHorizontalFill  size={26}/>
    },{
         link:'/admin/users',
        label:'users',
        icon:<RiDashboardHorizontalFill  size={26}/>
    },
    {
         link:'/admin/orders',
        label:'Orders',
        icon:<RiDashboardHorizontalFill  size={26}/>
    }
]

const SidebarLinks = () => {
  return (
    <div className='h-full w-full flex flex-col gap-2 px-1 mt-4 '>
      {
        links.map((link)=>{
            return<Link className={`flex items-center gap-2 border-[1.5px] transition-all duration-700 border-cyan-300 px-2 py-3 hover:bg-blue-300 hover:text-white`} href={link.link} key={link.link}>
                {link.icon}
                <p className='font-semibold text-black/80 text-[18px]'>{link.label}</p>
            </Link>
        })
      }
    </div>
  )
}

export default SidebarLinks