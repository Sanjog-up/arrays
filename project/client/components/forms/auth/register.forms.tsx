'use client'
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input'
import React, { useState } from 'react';

const RegisterForm = () => {

  const [full_name, setFullName] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [retypepassword, setRetypePassword]= useState('')

    const onFullNameChange = (e:React.ChangeEvent<HTMLInputElement,HTMLInputElement>)=> {
    console.log('full_name', e.target.value)
    setFullName(e.target.value)
  }

   const onEmailChange = (e: React.ChangeEvent<HTMLInputElement,HTMLInputElement>)=> {
          console.log('email', e.target.value)
          setEmail(e.target.value)
      }
       
      const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => {
          console.log('password', e.target.value)
          setPassword(e.target.value)
      }

      const onRetypePasswordChange = (e:React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => {
          console.log('retype-password', e.target.value)
          setRetypePassword(e.target.value)
      }

      const onPhoneNumberChange = (e:React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => {
          console.log('retype-password', e.target.value)
          setRetypePassword(e.target.value)
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
    <div className='w-full' >
        <form className='flex flex-col gap-4 w-full h-full'>
            <Input onChange={onFullNameChange} label='Full_Name' type='name' placeholder='johndoe' id="full_name" name='full_name'/>
            {/* <div className='w-full flex flex-col gap-1'>
              <label className='text-[15px] font-serif' htmlFor='full-name '>Name
              </label>
              <input id='full-name' 
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='John Doe'/>
            </div> */}
        

           <Input onChange={onEmailChange} label='Email' type='text' placeholder='johndoe@gmail.com' id="email" name='name'/>
          {/* <div className='w-full flex flex-col gap-1'>
            <label className='text-[15px] font-serif' htmlFor='email'>Email
              </label> 
              <input id='email'
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type='text' placeholder='Johndoe@gmail.com'/>
          </div> */}


          <Input onChange={onPasswordChange} label='Password' type='password' placeholder='********' id='password' name='password'/>



           {/* <div className='w-full flex flex-col gap-1'>
           <label className='text-[15px] font-serif' htmlFor='email'>Password
             </label>
             <input id='password'
            className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
            type='text' placeholder='Create Password'/>
          </div> */}

          <Input onChange={onRetypePasswordChange} label='Retype-Password' type='password' placeholder='********' id='c_password' name='c_password'/>

          {/* <div className='w-full flex flex-col gap-1'>
          <label className='text-[15px] font-serif' htmlFor='password'>Username</label>
          <input id='username'
          className='w-full border-[1.5px] border-blue-500 px-2 py-2 rounded-sm'
          type='text' placeholder='Username'
          />
          </div> */}

          <Input label='PhoneNumber' type='number' placeholder='98********' id='phonenumber' name='number' onChange={onPhoneNumberChange}/>

         {/* Button */}
         <Button
         label='Sign Up'
         type='submit'/>
       

        </form>
      </div>  
  )
}

export default RegisterForm
