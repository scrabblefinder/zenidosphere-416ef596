import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-zenDark min-h-screen font-inter">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;