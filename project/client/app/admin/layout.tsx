import Sidebar from '@/components/layout/admin/sidebar';
import React from 'react'
import SidebarLinks from '@/components/layout/admin/sidebar/sidebar-content';
import AdminHeader from '@/components/layout/admin/header';

const Layout = (
    {
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) => {
  return (
    <main className='h-screen flex '>
      
        <Sidebar/>
        <section className='w-full h-full'>
            <AdminHeader/>
            {children}
        </section>
    </main>
  )
}

export default Layout
