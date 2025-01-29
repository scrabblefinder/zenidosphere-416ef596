import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zenDark/50 py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zenPurple">ZENULLARI</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your go-to resource for premium domain name acquisition, appraisals, and expert insights. Unlock the value of digital real estate with trusted professionals and data-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-zenPurple mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Domains for Sale */}
          <div>
            <h3 className="text-lg font-semibold text-zenPurple mb-4">Domains for Sale</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UGR.com</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">BJA.com</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UYR.com</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ZDV.com</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UFJ.com</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-zenPurple mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Enter your email address below and get the latest domain name news!
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/10 border-white/20"
              />
              <Button size="icon" className="bg-zenPurple hover:bg-zenPurple/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;