"use client";

import Image from "next/image";

export default function LandingPage() {
return (
<section className="relative w-full overflow-auto"
 style={{ height: "160vh" }}>
  <Image
  src="/images/new.webp"
  alt="Landing Page"
  fill
  className="object-cover"
  style={{ objectPosition: "center 10%" }}
  priority
  />

  <div 
  style={{ 
    position: "absolute", 
    top: "10%", 
    left: "12px", 
    transform: "translateY(-50%)",
    maxWidth: "230px",
    padding: "16px",
    borderRadius: "8px",
  }}
  >
    <h1 style={{ color: "black", fontSize: "1.8rem", fontWeight: "bolder" }}>
      Grey Matter
    </h1>
    <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "1rem", fontWeight: "bold", marginTop: "8px" }}>
      Fashion that speaks for itself
    </p>
  </div>

  <div
  style={{
    position: "absolute",
    bottom: "700px",
    right: "24px",
    textAlign: "right",
  }}
  >
    <p style={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}>
      New Arrivals — 2026
    </p>
  </div>
</section>

)}