import { Phone } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 py-6" id="mainNav">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          ZENULLARI
          <div className="text-xs text-white/80 font-normal">DOMAIN NAME INVESTING</div>
        </a>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-300">HOME</a>
            <a href="#domains" className="text-white hover:text-white/80 transition-colors duration-300">DOMAINS FOR SALE</a>
          </div>
          <a href="tel:+12124443018" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-300">
            <Phone className="h-4 w-4" />
            <span>(+1) 212 444 3018</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;