import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Domains from "./pages/Domains";
import Auth from "./pages/Auth";
import AdminDomains from "./pages/admin/AdminDomains";
import AdminOffers from "./pages/admin/AdminOffers";
import PremiumDomains from "./components/PremiumDomains";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-zenDark">
              <Navigation />
              <Hero />
              <PremiumDomains />
              <Welcome />
              <Footer />
            </div>
          }
        />
        <Route path="/domains" element={<Domains />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/domains" element={<AdminDomains />} />
        <Route path="/admin/offers" element={<AdminOffers />} />
      </Routes>
    </Router>
  );
};

export default App;