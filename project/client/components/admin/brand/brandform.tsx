'use client'
import Input from '@/components/common/ui/input'
import { register } from 'module'
import React from 'react'
import { useForm } from 'react-hook-form'
import AdminListCard from '../list-card'
import Button from '@/components/common/ui/button'
import ImageInput from '@/components/common/ui/image-input'

const BrandForm = () => {
    const {register, formState: { errors } }  = useForm({
        defaultValues:{
            name:"",
            description:"",
            logo:null,
            
        }
    })
  return (
    <AdminListCard>
    <div>
      <h4 className='text-[18px] font-semibold text-black/80 my-4'>Brand Form</h4>

      <form className='max-w-120 mx-auto flex gap-4 flex-col border border-gray-200 px-4 py-8 rounded-md'>
        <Input
        label='Name'
        name='name'
        type='text'
        id={'name'}
        placeholder='Caliber'
        register={register}
        required
        />
        <Input
        label='Descrption'
        name='description'
        type='text'
        id={'description'}
        placeholder='Describe your brand [at least 25 chars]'
        register={register}
        required
        multiline={true}
        />

        <ImageInput
        label='logo'
        id='brand_logo'
        />


        <div>
        <Button
        label='Submit'
        type='submit'
        />
        </div>

      </form>
    </div>
</AdminListCard>
  )}
export default BrandForm
