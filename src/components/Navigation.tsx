import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsLoggedIn(!!session);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-6 ${
        isScrolled ? 'bg-[#126e82]' : 'bg-transparent'
      }`} 
      id="mainNav"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          ZENULLARI
          <div className="text-xs text-white/80 font-normal">DOMAIN NAME INVESTING</div>
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors duration-300">HOME</Link>
            <Link to="/domains-for-sale" className="text-white hover:text-white/80 transition-colors duration-300">DOMAINS FOR SALE</Link>
            {isLoggedIn && (
              <Link to="/admin/domains" className="text-white hover:text-white/80 transition-colors duration-300">ADMIN</Link>
            )}
          </div>
          <a href="tel:+12124443018" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-300">
            <Phone className="h-4 w-4" />
            <span>(+1) 212 444 3018</span>
          </a>
          {isLoggedIn && (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;