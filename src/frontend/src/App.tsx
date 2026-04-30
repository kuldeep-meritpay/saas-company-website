import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout";
import AboutUs from "./components/sections/AboutUs";
import Blog from "./components/sections/Blog";
import ClientsStrip from "./components/sections/ClientsStrip";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Testimonials from "./components/sections/Testimonials";
import WhyUs from "./components/sections/WhyUs";
import FloatingCTA from "./components/ui/FloatingCTA";
import ScrollProgress from "./components/ui/ScrollProgress";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Layout>
        <Hero />
        <ClientsStrip />
        <Services />
        <Products />
        <WhyUs />
        <TechStack />
        <Testimonials />
        <Blog />
        <AboutUs />
        <Contact />
      </Layout>
      <FloatingCTA />
    </QueryClientProvider>
  );
}
