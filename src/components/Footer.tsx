import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#146e82] text-white">
      {/* Contact Info Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Call Us */}
          <div className="flex items-center gap-4">
            <Phone className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-gray-100">(+1) 212 444 3018</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-4">
            <Mail className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-100">info@zenullari.com</p>
            </div>
          </div>

          {/* Our Location */}
          <div className="flex items-center gap-4">
            <MapPin className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-gray-100">New York City</p>
            </div>
          </div>

          {/* Work Hours */}
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Work Hours</h3>
              <p className="text-gray-100">09:00 AM – 17:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">ZENULLARI</h2>
              <p className="text-sm leading-relaxed text-gray-100">
                Your go-to resource for premium domain name acquisition, appraisals, and expert insights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-100 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-100 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-100 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Domains for Sale */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Domains for Sale</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-100 hover:text-white transition-colors">UGR.com</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white transition-colors">BJA.com</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white transition-colors">UYR.com</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white transition-colors">ZDV.com</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white transition-colors">UFJ.com</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4 text-gray-100">
                Enter your email address below and get the latest domain name news!
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-gray-300"
                />
                <button className="p-2 bg-white hover:bg-white/90 text-[#146e82] rounded transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;