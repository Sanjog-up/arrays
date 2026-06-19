// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import path from "path";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
// ];

// const Pathname = () => {

//   return (
//     <header className="w-full border-b border-indigo-100">
//       <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
//         <Link href="/" className="text-lg font-bold tracking-wide text-indigo-700">
//           Ecom
//         </Link>
//         <div className="flex gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-sm font-medium transition-colors ${
//                 Pathname = link.href
//                   ? "text-indigo-700 underline"
//                   : "text-gray-600 hover:text-indigo-700"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }
// }