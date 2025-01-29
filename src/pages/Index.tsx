import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-zenDark min-h-screen font-inter flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;