"use client";

import Link from "next/link";
import React from 'react'

const Header = () => {
  return (
    <main>
        <nav className="flex  items-center justify-between px-6 py-4 rounded-sm hover:bg-blue-300">
            <p className="whitespace-nowrap w-full text-2xl">Grey Matter</p>

            <div className="flex items-center gap-3">
            <Link href={"/"} className='italic font-semibold text-blue-800 px-2 py-2 whitespace-nowrap' >Home</Link>
            <Link href={"/products"} className="italic font-semibold text-blue-800 px-2 py-2">Products</Link>
            <Link href={"/about"} className="italic font-semibold text-blue-800 px-2 py-2 whitespace-nowrap">About Us</Link>
            <Link href={"/contact"} className="italic font-semibold text-blue-800 px-2 py-2 whitespace-nowrap">Contact Us</Link>
          </div>

          <Link href={"/auth/login"}
          className=" bg-blue-400 text-amber-50 font-semibold px-5 py-2 rounded-lg whitespace-nowrap">Login</Link>
        </nav>

    </main>
  )
}

export default Header
