import Input from '@/components/common/ui/input'
import React from 'react';
import Link from 'next/link';
const RegisterForm = () => {
  return (
    <div className='w-full' >
        <form className='flex flex-col gap-4 w-full h-full'>
            <Input label='Full_Name' type='name' placeholder='johndoe' id="full_name" name='full_name'/>
            {/* <div className='w-full flex flex-col gap-1'>
              <label className='text-[15px] font-serif' htmlFor='full-name '>Name
              </label>
              <input id='full-name' 
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='John Doe'/>
            </div> */}
        

           <Input label='Email' type='text' placeholder='johndoe@gmail.com' id="email" name='name'/>
          {/* <div className='w-full flex flex-col gap-1'>
            <label className='text-[15px] font-serif' htmlFor='email'>Email
              </label> 
              <input id='email'
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='Johndoe@gmail.com'/>
          </div> */}


          <Input label='Password' type='password' placeholder='********' id='password' name='password'/>



           {/* <div className='w-full flex flex-col gap-1'>
           <label className='text-[15px] font-serif' htmlFor='email'>Password
             </label>
             <input id='password'
            className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
            type='text' placeholder='Create Password'/>
          </div> */}

          <Input label='Retype-Password' type='password' placeholder='********' id='c_password' name='c_password'/>

          {/* <div className='w-full flex flex-col gap-1'>
          <label className='text-[15px] font-serif' htmlFor='password'>Username</label>
          <input id='username'
          className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
          type='text' placeholder='Username'
          />
          </div> */}

          <button type='submit'
          className='w-full bg-linear-to-t from-sky-500 to-indigo-500 py-2.5 rounded-sm cursor-pointer text-amber-50 font-bold mt-3'>
            Submit
          </button >
          
          {/* <Link href="/login">
          <button
          className='w-full bg-amber-50 '>
            already have account
          </button>
          </Link> */}

        </form>
      </div>  
  )
}

export default RegisterForm
