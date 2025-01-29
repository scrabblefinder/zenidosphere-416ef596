import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d8e3e6]">
      {/* Contact Info Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Call Us */}
          <div className="flex items-center gap-4">
            <Phone className="h-8 w-8 text-[#126e82]" />
            <div>
              <h3 className="text-xl font-semibold text-[#126e82]">Call Us</h3>
              <p className="text-gray-600">(+1) 212 444 3018</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-4">
            <Mail className="h-8 w-8 text-[#126e82]" />
            <div>
              <h3 className="text-xl font-semibold text-[#126e82]">Email Us</h3>
              <p className="text-gray-600">info@zenullari.com</p>
            </div>
          </div>

          {/* Our Location */}
          <div className="flex items-center gap-4">
            <MapPin className="h-8 w-8 text-[#126e82]" />
            <div>
              <h3 className="text-xl font-semibold text-[#126e82]">Our Location</h3>
              <p className="text-gray-600">New York City</p>
            </div>
          </div>

          {/* Work Hours */}
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-[#126e82]" />
            <div>
              <h3 className="text-xl font-semibold text-[#126e82]">Work Hours</h3>
              <p className="text-gray-600">09:00 AM – 17:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#126e82]">ZENULLARI</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Your go-to resource for premium domain name acquisition, appraisals, and expert insights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#126e82]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-[#126e82] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-[#126e82] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-[#126e82] transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-[#126e82] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Domains for Sale */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#126e82]">Domains for Sale</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#126e82] transition-colors">UGR.com</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#126e82] transition-colors">BJA.com</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#126e82] transition-colors">UYR.com</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#126e82] transition-colors">ZDV.com</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#126e82] transition-colors">UFJ.com</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#126e82]">Newsletter</h3>
              <p className="text-sm mb-4 text-gray-600">
                Enter your email address below and get the latest domain name news!
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-gray-600 placeholder:text-gray-400"
                />
                <button className="p-2 bg-[#126e82] hover:bg-[#126e82]/90 text-white rounded transition-colors">
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