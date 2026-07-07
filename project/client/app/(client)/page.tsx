import CategorySection from "@/components/landing/category-section";
import Hero from "@/components/landing/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LandingPage from "@/components/layout/landing.page";

export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      {/* <Header/> */}
      {/* <LandingPage/> */}
      <Hero/> 
      <CategorySection/>
      {/* hero section */}
      {/* Our category */}
      {/* featured products */}
      {/* new arrivals */}

      <Footer/>
    </main>
  )
}