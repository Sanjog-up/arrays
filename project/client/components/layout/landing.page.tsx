
  "use client";


import  {useState}  from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-270 w-screen k" >
      <Image
        src="/images/new.webp"
        alt="Hero front"
        fill
        className={`object-cover w-l h-96"
        }`}
        priority
      />


    </div>
  );
}
      
   
//   );
// }

// export default LandingPage;