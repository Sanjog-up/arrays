import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Ecom | sign up",
    description:"ecommerce sign up page"
}

const RegisterPage = () => {
  return (
    <main className='h-full w-full flex justify-center items-center border'>

      <div className='min-h-80 min-w-80 border border-blue-600 p-4 rounded-md shadow-xl shadow-indigo-200 flex flex-col gap-6'>

        <div className='flex flex-col gap-0'>
        <h1 className='text-[18px] font-semibold tracking-wider leading-4.5'> Sign up</h1>
        <p className='font-semibold text-[14px] tracking-wider'>Get started to order our products</p>
        </div>

      <div className='w-full' >
        <form className='flex flex-col gap-4 w-full h-full'>
            <div className='w-full flex flex-col gap-1'>
              <label className='text-[15px] font-serif' htmlFor='full-name '>Name
              </label>
              <input id='full-name' 
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='John Doe'/>
            </div>
        


          <div className='w-full flex flex-col gap-1'>
            <label className='text-[15px] font-serif' htmlFor='email'>Email
              </label> 
              <input id='email'
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='Johndoe@gmail.com'/>
          </div>

          <div className='w-full flex flex-col gap-1'>
          <label className='text-[15px] font-serif' htmlFor='email'>Password
            </label>
            <input id='password'
            className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
            type='text' placeholder='Create Password'/>
          </div>

          <div className='w-full flex flex-col gap-1'>
          <label className='text-[15px] font-serif' htmlFor='password'>Username</label>
          <input id='username'
          className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
          type='text' placeholder='Username'
          />
          </div>

          <button type='submit'
          className='w-full bg-linear-to-t from-sky-500 to-indigo-500 py-2.5 rounded-sm cursor-pointer text-amber-50 font-bold mt-3'>
            Submit
          </button >
          
          <button
          className='w-full bg-amber-50 '>
            already have account
          </button>

        </form>
      </div>  
      </div>
    </main>
  )
}

export default RegisterPage
