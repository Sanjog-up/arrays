import Image from 'next/image'
import React, { ChangeEvent, useRef, useState } from 'react'
import { LuAsterisk } from 'react-icons/lu'

interface IProps{
    multiple?: boolean
    label:string
    required?: boolean
    id:string
}

const ImageInput = ({ multiple = false, label, required=false, id }:IProps) => {
  const inputRef = useRef<any>(null)
  const [preview, setPriview] = useState<string | null>();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  //   const file = e.target.files;
  //   console.log(e.target.files);
  const onChange = (e:ChangeEvent<HTMLInputElement, HTMLInputElement>)=> {
    if(!e.target.files){
      return
    }
  
    const files = Array.from(e.target.files)
    setPriview(URL.createObjectURL(files[0]))
  }

  return (
    <div>
      
   
    <div className={'flex'}>
      
        <label  htmlFor={id} className='text-[14px]'>{label}</label>
        {required && <LuAsterisk className='text-indigo-500'/>}
    </div>
    <div className='relative border cursor-pointer border-dashed border-blue-500 h-40 rounded-md py-3 px-2'>Drag and drop or click to upload
      {/* onClick{()=> {inputRef?.current?.click()}} */}
      <p><small>Only single file allowed</small></p>
      <input
      ref={inputRef}
      type='file'
      className='cursor-pointer opacity-0 absolute inset-0 w-full h-full'
      multiple={multiple}
      // onChange={handleChange}
      onChange={onChange}
    /> 
    {preview && <div className='h-20'>
      {preview && <div className='h-20 w-20 rounded-sm'>
        <Image
        src={preview}
        alt='preview'
        width={100}
        height={100}
        className='h-full w-full overflow-clip rounded-sm'
        />
          </div>}
    </div>
  
      
      
       } </div>
        </div>
  )}

export default ImageInput