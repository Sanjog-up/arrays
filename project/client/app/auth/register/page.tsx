import React from 'react'
import { Metadata } from 'next';
import RegisterForm from '@/components/forms/auth/register.forms';
export const metadata: Metadata = {
    title: "Ecom | sign up",
    description:"ecommerce sign up page"
}


const RegisterPage = () => {
  return (
    <main className='h-full w-full flex justify-center items-center border'>
      {/* main page content */}
      <div className='min-h-80 min-w-80 border border-blue-600 p-4 rounded-md shadow-xl shadow-indigo-200 flex flex-col gap-6'>

        {/* heading */}
        <div className='flex flex-col gap-0'>
        <h1 className='text-[18px] font-semibold tracking-wider leading-4.5'> Sign up</h1>
        <p className='font-semibold text-[14px] tracking-wider'>Get started to order our products</p>
        </div>

        <RegisterForm/>
      </div>
    </main>
  )
}

export default RegisterPage
