

import Link from "next/link";


const Header = () => {
  return (
    <header className="sticky  top-0 z-50 border-b border-zinc-200 bg-white">
        <nav className="flex items-center justify-between px-6 py-4 rounded-sm hover:bg-blue-100 transition-colors">
            
            <Link href={"/"} className="whitespace-nowrap text-xl font-serif">Grey Matter </Link>  

            <section className="flex items-center gap-3">
            <Link href={"/"} className='italic font-serif font-semibold text-blue-800 px-2 py-2 hover:bg-blue-200 rounded-xl whitespace-nowrap' >
            Home
            </Link>
            <Link href={"/products"} className="italic font-semibold font-serif text-blue-800 px-2 py-2 hover:bg-blue-200 rounded-xl">
            Products
            </Link>
            <Link href={"/about"} className="italic font-serif font-semibold text-blue-800 px-2 py-2  hover:bg-blue-200 rounded-xl whitespace-nowrap">
            About Us
            </Link>
            <Link href={"/contact"} className="italic font-serif font-semibold text-blue-800 px-2 py-2  hover:bg-blue-200 rounded-xl whitespace-nowrap">
            Contact Us
            </Link>

            <section className = "relative group">
            <p className="italic font-serif font-semibold text-blue-800 px-2 py-2 cursor-pointer hover:bg-blue-200 rounded-xl">
              Men
              </p>

            <div className="absolute left-0 top-full  bg-white border border-zinc-200 shadow-lg rounded-xl min-w-40 py-2 z-50">
            <Link href="/men/t-shirts" className="block px-4 py-2 text-sm font-serif text-blue-800 hover:bg-zinc-100 whitespace-nowrap">
            T-Shirts
          </Link>
          <Link href="/men/jackets" className="block px-4 py-2 text-sm font-serif text-blue-800 hover:bg-zinc-100">
            Jackets
          </Link>
          <Link href="/men/pants" className="block px-4 py-2 text-sm font-serif text-blue-800 hover:bg-zinc-100">
            Pants
          </Link>
          </div>
            </section>
          </section>

          <Link href={"/auth/login"}
          className=" bg-blue-400 text-amber-50 font-serif px-5 py-2 rounded-lg whitespace-nowrap">
            Login</Link>
        </nav>
</header>
    
  )
}

export default Header