import Header from '@/components/layout/header'
import React from 'react'

const Layout = ({
     children,
}: Readonly<{
  children: React.ReactNode;}>
) => {
    
  return (
    <main className='h-full'>
      <Header/>
      <section className='min-h-[80vh] px-20 pt-1'>
        {children}
      </section>
      <div>
        Client footer
      </div>
    </main>
  )
}

export default Layout
