import React from 'react'

interface IProps{
    label: string;
    id: string;
    type: "text" | "email" | "password" | "number";
    placeholder: string;
    name: string;
}

const Input = ({ label, id, placeholder, type}: IProps) => {
  return (
   <div className='w-full flex flex-col gap-1'>
            <label className='text-[15px] font-serif' htmlFor={id}>
                Email
              </label> 
              <input id={id}
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm'
              type={type} 
              name="name"
              placeholder={placeholder}/>
          </div>

  )
}

export default Input
