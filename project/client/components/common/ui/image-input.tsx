import React from 'react'
import { LuAsterisk } from 'react-icons/lu'

interface IProps{
    multiple?: boolean
    label:string
    required?: boolean
    id:string
}

const ImageInput = ({ multiple = false, label, required=false, id }:IProps) => {
  return (
    <div>
    <div className={'flex'}>
        <label htmlFor={id} className='text-[14px]'>{label}</label>
        {required && <LuAsterisk className='text-indigo-500'/>}
    </div>
    <div className='border border-dashed border-blue-500 h-40 rounded-md py-3 px-2'>
      <input
      type='file'
      className='cursor-pointer'
      multiple={true}
    />
    </div>
    </div>
  )
}

export default ImageInput
