'use client'

import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input';
import React, { useState } from 'react'

const LoginForm = () => {

    const[email,setEmail]= useState('')
    const[password, setPassword]= useState('')

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement,HTMLInputElement>)=> {
        console.log('email', e.target.value)
        setEmail(e.target.value)
    }
     
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => {
        console.log('password', e.target.value)
        setPassword(e.target.value)
    }

    const onSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('form data',{
            email,
            password
        })
        // http post /auth/login
    }





  return (
    <div className='w-full'>
   <form className='flex flex-col gap-4 w-full'>
                {/* <div className='w-full flex flex-col gap-1'>
                    <label htmlFor='email' className='text-[14px] font-medium'>
                        Email
                    </label>
                <input 
                id='email'
                className='w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm '
                type="text" placeholder='johndoe@gmail.com'/>
                </div> */}
                <Input
                name='email'
                onChange={onEmailChange}
                label={'Email'}
                id='email'
                placeholder='johndoe@gmail.com'
                type='text'/>


                {/* <div className='w-full flex flex-col gap-1'>
                <label htmlFor='password' className='text-[14px] font-medium'>
                        Password
                    </label>
                    <input 
                    id='password'
                    className='w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm '
                    type='password' placeholder='password'/>
                </div> */}
                <Input
                onChange={onPasswordChange}
                name='password'
                label='Password'
                placeholder='******'
                id='password'
                type='password'/>
    
                {/* <button 
                type='submit'
                className='w-full bg-linear-to-t from-sky-500 to-indigo-500 py-2.5 rounded-sm cursor-pointer text-amber-50 font-bold mt-3'
                >
                    Sign In
                </button> */}
                <Button
                label='Sign In'
                type='submit'/>
                        </form>
</div>)}

export default LoginForm;
