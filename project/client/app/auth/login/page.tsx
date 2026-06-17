import { Metadata } from 'next'
import React from 'react';
import LoginForm from '@/components/forms/auth/login.form';
export const metadata: Metadata = {
    title: "Ecom | sigin",
    description:"ecommerce sign in page"
}


const LoginPage = () => {
  return (
    
        <main className='h-full w-full flex justify-center items-center border'>
      {/* page content */}
      <div className='max-h-80 min-w-80 border border-indigo-500 p-4 rounded-md shadow-xl shadow-indigo-200 flex flex-col gap-6'>
        {/* form heading */}
        <div className='flex flex-col gap-0'>
            <h1 className='text-[18px] font-semibold tracking-wider leading-4.5 ' >Welcome back</h1>
            <p className='text-sm tracking-wider font-black'>Login to access account</p>
        </div>

        {/* form */}
        <LoginForm/>
        </div>
    </main>
    
  )
}

export default LoginPage
