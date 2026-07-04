"use client";

import Image from "next/image";

export default function LandingPage() {

  return (
    <section
      className="relative w-full  overflow-hidden "
      style={{ height: '145vh'}}>
      <Image
        src="/images/new.webp"
        alt="Hero front"
        fill
        className={"object-cover object-top"} 
        style={{ objectPosition: "center 20%" }}
        priority
      />  

     

      {/* Top-left text */}
      <div className="absolute bg-black top-6 left-6 md:top-10 md:left-10">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Grey Matter
        </h1>
      </div>
      
      
      <section className="absolute bottom-9 left-7 w-full h-1/2  from-black to-transparent">
      <div className="absolute bottom-5 right-6 md:bottom-10 md:right-10 text-right">
        <p className="text-white text-sm md:text-lg">
          Fashion that speaks for itself
        </p>
      </div>
      </section>
    
    </section>
  );
}
