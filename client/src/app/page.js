import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Pricing from "@/sections/Pricing";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to slate-900">
        <LogoTicker />
        <Features />
        <Pricing/>
        <Faqs />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
