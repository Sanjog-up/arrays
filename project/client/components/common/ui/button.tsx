import React from 'react'

interface IProps {
   label: string,
    type?: 'reset' | 'submit' | 'button' 
}
const Button = ({ label= 'Button', type = 'button' }: IProps) => {
  return (
    <div>
      <button type='submit'
          className='w-full bg-linear-to-t from-sky-500 to-indigo-500 py-2.5 rounded-sm cursor-pointer text-amber-50 font-bold mt-3'>
            Submit
          </button >
    </div>
  )
}

export default Button
