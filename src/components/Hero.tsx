import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-white mb-4 animate-fadeIn">
            Acquire your premium domain name today!
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
            <span className="text-[#5BB5CF]">Invest</span>{" "}
            For The Future with
            <br />
            the Perfect Domain!
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fadeIn">
            With over 20 years of experience in the domain name industry, we are trusted
            professionals dedicated to helping you secure the perfect domain name for
            your needs
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-sm hover:bg-white/20 transition-colors duration-300"
          >
            <span>GET STARTED</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;