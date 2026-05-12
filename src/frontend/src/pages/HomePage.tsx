import AboutUs from "@/components/sections/AboutUs";
import Blog from "@/components/sections/Blog";
import ClientsStrip from "@/components/sections/ClientsStrip";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <Services />
      <Products />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <AboutUs />
      <Blog />
      <Contact />
    </>
  );
}
