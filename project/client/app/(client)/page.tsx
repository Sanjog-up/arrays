import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LandingPage from "@/components/layout/landing.page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      <Header/>
      <LandingPage/>
      {/* hero section */}
      {/* Our category */}
      {/* featured products */}
      {/* new arrivals */}

      <Footer/>
    </main>
  )
}