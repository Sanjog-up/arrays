import React from 'react'

const Footer = () => {
  return (
    
      <footer className='w-full bg-blue-200 py-16 px-6'>
        <div className=' mx-auto'>
        

        <div className='bg-sky-6 grid grid-cols-1 items-center md:grid-cols-4 lg:grid-cols-6 gap-10'>

          <div className='p-4 '>
             <h3 className=' text-l font-serif tracking-widest uppercase mb-6 text-zinc-800 whitespace-nowrap'>The Company</h3>
              <ul className='space-y-3'>
                <li className='hover:text-blue-900  transition-colors  text-l '><a href='/about'>About</a></li>
                <li className='hover:text-blue-900 transition-colors text-l whitespace-nowrap'><a href='/products'>Our Products </a></li>
              </ul>
          </div>
        

        <div>
          <h1 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Clients</h1>
          <ul>
            <p>FAQ</p>
            <p>Track Order</p>
            <p>Delivery</p>
            <p>Payment</p>
            <p>Privacy Policy</p>
          </ul>
        </div>
       
       <div>Follow Us</div>

       <div>Contact Us</div>
        </div>
        </div>
      </footer>
   
  )
}

export default Footer
// "use client";

// import Link from "next/link";
// import { useState, type FormEvent } from "react";

// type FooterLink = {
//   label: string;
//   href: string;
// };

// const shopLinks: FooterLink[] = [
//   { label: "New Arrivals", href: "/products?sort=newest" },
//   { label: "Best Sellers", href: "/products?sort=popular" },
//   { label: "All Categories", href: "/categories" },
//   { label: "Sale", href: "/products?on_sale=true" },
// ];

// const helpLinks: FooterLink[] = [
//   { label: "Track Order", href: "/orders/track" },
//   { label: "Shipping Info", href: "/help/shipping" },
//   { label: "Returns & Exchanges", href: "/help/returns" },
//   { label: "FAQ", href: "/help/faq" },
// ];

// const companyLinks: FooterLink[] = [
//   { label: "About Us", href: "/about" },
//   { label: "Contact", href: "/contact" },
//   { label: "Privacy Policy", href: "/legal/privacy" },
//   { label: "Terms of Service", href: "/legal/terms" },
// ];

// function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
//   return (
//     <div className="col-span-1 md:col-span-2 lg:col-span-2">
//       <h3 className="text-sm font-semibold text-white">{title}</h3>
//       <ul className="mt-4 space-y-3">
//         {links.map((link) => (
//           <li key={link.href}>
//             <Link
//               href={link.href}
//               className="text-sm text-zinc-400 transition-colors hover:text-white"
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SocialIcon({
//   href,
//   label,
//   path,
// }: {
//   href: string;
//   label: string;
//   path: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//     >
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
//         <path d={path} />
//       </svg>
//     </a>
//   );
// }

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   function handleSubscribe(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!email) return;
//     // TODO: wire this up to your newsletter endpoint (e.g. POST /api/newsletter)
//     setSubscribed(true);
//     setEmail("");
//   }

//   return (
//     <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
//       <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
//         <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-6 lg:grid-cols-12">
//           {/* Brand + newsletter */}
//           <div className="col-span-2 md:col-span-6 lg:col-span-4">
//             <Link href="/" className="text-lg font-bold text-white">
//               Grey Matter
//             </Link>
//             <p className="mt-3 max-w-xs text-sm text-zinc-400">
//               Thoughtfully sourced products, delivered across Nepal.
//             </p>

//             {subscribed ? (
//               <p className="mt-6 text-sm text-emerald-400">
//                 You&apos;re subscribed — watch your inbox for deals.
//               </p>
//             ) : (
//               <form onSubmit={handleSubscribe} className="mt-6 flex max-w-sm gap-2">
//                 <label htmlFor="footer-email" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="footer-email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             )}

//             <div className="mt-6 flex gap-3">
//               <SocialIcon
//                 href="https://facebook.com"
//                 label="Facebook"
//                 path="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.8-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z"
//               />
//               <SocialIcon
//                 href="https://instagram.com"
//                 label="Instagram"
//                 path="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.2.6.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.3 1.8-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.6.2-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.3-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.2-.6-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.3-1.9.5-2.5.3-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.2 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.4-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.4 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.4 1.7.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.4 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.4.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.4-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.4-1.7-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.4-1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5-3.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
//               />
//               <SocialIcon
//                 href="https://twitter.com"
//                 label="X (Twitter)"
//                 path="M18.9 2H22l-7 8 7.6 12h-6l-4.7-7.4L6.5 22H3.4l7.6-8.7L3 2h6.1l4.3 6.8L18.9 2z"
//               />
//             </div>
//           </div>

//           <FooterColumn title="Shop" links={shopLinks} />
//           <FooterColumn title="Help" links={helpLinks} />
//           <FooterColumn title="Company" links={companyLinks} />
//         </div>

//         <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-sm text-zinc-500">
//             &copy; {new Date().getFullYear()} Grey Matter. All rights reserved.
//           </p>
//           <div className="flex flex-wrap items-center gap-2">
//             {["Cash on Delivery", "Khalti", "eSewa"].map((method) => (
//               <span
//                 key={method}
//                 className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
//               >
//                 {method}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
