import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {

    const isAuth= true
  return (
    <nav className='flex justify-between h-18 py-2 px-20 items-center shadow-sm shadow-indigo-200'>
        <div>
            <Image
            src={'./asap.webp'}
            alt='logo'
            height={100}
            width={100}
            />
        </div>

        {/*  links */}
        <div className='flex gap-2 items-center'>
            <Link className='mt-1'
            title='WishList'
            href={'/wishlist'}
            >
            <FaRegHeart className='text-red-400 ' size={24}/>
            </Link>
        
            <Link className='mt-1'
            title='Cart'
            href={'/wishlist'}
            >
            <HiOutlineShoppingBag className='text-red-400 ' size={24}/>
            </Link>
            </div>
    </nav>
    
        

            {/* auth & cart */}
            {isAuth ? <AuthUser /> : <div className='flex gap-2 items-center'>
                <Link className='flex items-center' href={'/auth/login'}>
                <div className='text-white font-bold bg-indigo-400 flex items-center gap-1 p-1 px-3 py-2 hover:bg-indigo-300 transition-all duration-300'>
                    <LuLogIn/>
                    <p>Login</p>
                </div>
                </Link>
                </div>}



export const AuthUser = () => {
    <div>
                {/* profileImage */}
                <div className=''>
                    <Image
                    src={'/asap.webp'}
                    alt='profile_image'
                    height={200}
                    width={200}
                    loading='lazy'
                    className='h-full w-full rounded-full object-cover object-left'
                    />
                </div>
                <div>
                    {/* name  */}
                    <p className='text-lg font-normal rounded '>John Doe</p>
                    {/* logout */}
                    <div className='cursor-pointer text-red-300'>
                        <IoLogOutOutline size={22} />
                        <p className='text-sm '>Logout</p>
                    </div>
                </div>
            </div>
}
      
    
  )
}

export default Navbar
