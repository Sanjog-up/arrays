

import Link from "next/link";


const Header = () => {
  return (
    <header>
        <nav className="flex  items-center justify-between px-6 py-4 rounded-sm hover:bg-blue-100 transition-colors">
            
            <Link href={"/"} className="whitespace-nowrap text-2xl font-serif">Grey Matter </Link>  
            

            <div className="flex items-center gap-3">
            <Link href={"/"} className='italic font-serif font-semibold text-blue-800 px-2 py-2 hover:bg-blue-200 rounded-xl whitespace-nowrap' >Home</Link>
            <Link href={"/products"} className="italic font-semibold font-serif text-blue-800 px-2 py-2 hover:bg-blue-200 rounded-xl">Products</Link>
            <Link href={"/about"} className="italic font-serif font-semibold text-blue-800 px-2 py-2  hover:bg-blue-200 rounded-xl whitespace-nowrap">About Us</Link>
            <Link href={"/contact"} className="italic font-serif font-semibold text-blue-800 px-2 py-2  hover:bg-blue-200 rounded-xl whitespace-nowrap">Contact Us</Link>
          </div>

          <Link href={"/auth/login"}
          className=" bg-blue-400 text-amber-50 font-serif px-5 py-2 rounded-lg whitespace-nowrap">Login</Link>
        </nav>
</header>
    
  )
}

export default Header


// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
//         <Link href="/" className="text-lg font-bold text-zinc-950">
//           Grey Matter
//         </Link>

//         <nav className="hidden items-center gap-8 md:flex">
//           <Link href="/products" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
//             Shop
//           </Link>
//           <Link href="/categories" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
//             Categories
//           </Link>
//           <Link href="/products?on_sale=true" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
//             Sale
//           </Link>
//           <Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-zinc-950">
//             About
//           </Link>
//         </nav>

//         <div className="flex items-center gap-5">
//           <Link href="/search" aria-label="Search" className="text-zinc-700 hover:text-zinc-950">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
//             </svg>
//           </Link>

//           <Link href="/account" aria-label="Account" className="text-zinc-700 hover:text-zinc-950">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z" />
//             </svg>
//           </Link>

//           <Link href="/cart" aria-label="Cart" className="relative text-zinc-700 hover:text-zinc-950">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6" />
//               <circle cx="9" cy="20" r="1" />
//               <circle cx="17" cy="20" r="1" />
//             </svg>
//             <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 text-[10px] text-white">
//               0
//             </span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
