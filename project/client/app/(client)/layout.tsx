import Header from '@/components/layout/header'
import React from 'react'

const Layout = ({
     children,
}: Readonly<{
  children: React.ReactNode;}>
) => {
    
  return (
    <main className='h-full w-full'>
      
      <section className='min-h-[80vh] px-10 pt-1'>
        {children}
      </section>
      <div>
        Client footer
      </div>
    </main>
  )
}

export default Layout
