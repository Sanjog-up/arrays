// import React from 'react'

// const LandingPage = () => {
//   return (
//     <main>
//       <img src={""}/>
//     </main>
//   )
// }

// export default LandingPage

// import React from 'react';
// import Image from 'next/image';
// const LandingPage = () => {
//   return (
    // <div className="max-w-full bg-white border border-gray-200 h-[85vh] rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
      
    //     <img
    //       src="https://picsum.photos/seed/headphones/400/500"
    //       alt="Premium wireless headphones"
    //       className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
    //     />
       
    //     </div>
  //   <div className="relative h-screen w-full">
  //    <Image
  //      src="/images/back.webp"
  //      alt="Hero background"
  //      fill
  //      className="object-cover"
  //      priority
  //    />
  //    <div className="relative z-10 flex h-full items-center justify-center">
  //      {/* your content on top of the image */}
  //    </div>
  //  </div>
  "use client";


import  {useState}  from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-170 w-170"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/images/front.webp"
        alt="Hero front"
        fill
        className={`object-cover transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
      <Image
        src="/images/back.webp"
        alt="Hero back"
        fill
        className={`object-cover transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        priority
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        {/* your content on top of the image */}
      </div>
    </div>
  );
}
      
   
//   );
// }

// export default LandingPage;