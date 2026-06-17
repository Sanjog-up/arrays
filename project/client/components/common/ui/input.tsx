import React from 'react'
import { FaAsterisk } from "react-icons/fa";

interface IProps{
    label: string;
    id: string;
    type: "text" | "email" | "password" | "number" | "name";
    placeholder: string;
    name: string;
}

const Input = ({ label, id, placeholder, type}: IProps) => {
  return (
   <div className='w-full flex flex-col gap-1'>
    <div className={'flex'}>
            <label className='text-[15px] font-serif' htmlFor={id}>
                {label}
              </label>
              <FaAsterisk  size={8} className='text-black-400'/>
              </div>
              <input id={id}
              className='w-full border-[1.5px]  border-blue-600  px-2 py-2 rounded-sm focus:outline-blue-900'
              type={type} 
              name="name"
              placeholder={placeholder}/>
          </div>

  )
}

export default Input
