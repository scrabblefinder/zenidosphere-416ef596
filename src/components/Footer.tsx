import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d8e3e6]">
      {/* Contact Info Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
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
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-[#126e82]">ZENULLARI.com</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Your go-to resource for premium domain name acquisition, appraisals, and expert insights.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="border-t border-gray-300 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ZENULLARI.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;