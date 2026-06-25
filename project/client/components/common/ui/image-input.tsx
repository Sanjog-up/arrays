import React from 'react'
import { LuAsterisk } from 'react-icons/lu'

interface IProps{
    multiple?: boolean
    label:string
    required?: boolean
    id:string
}

const ImageInput = ({ multiple = false, label, required=false, id }:IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files;
    console.log(file);
  }
  return (
    <div>
    <div className={'flex'}>
      
        <label  htmlFor={id} className='text-[14px]'>{label}</label>
        {required && <LuAsterisk className='text-indigo-500'/>}
    </div>
    <div className='relative border cursor-pointer border-dashed border-blue-500 h-40 rounded-md py-3 px-2'>Drag and drop or click to upload
      <input
      type='file'
      className='cursor-pointer opacity-0 absolute inset-0 w-full h-full'
      multiple={multiple}
      onChange={handleChange}
    />
    </div>
    </div>
  )
}

export default ImageInput