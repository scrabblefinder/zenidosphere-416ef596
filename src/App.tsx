import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Domains from "./pages/Domains";
import Auth from "./pages/Auth";
import AdminDomains from "./pages/admin/AdminDomains";
import AdminOffers from "./pages/admin/AdminOffers";

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
              <Welcome />
              <Footer />
            </div>
          }
        />
        <Route 
          path="/domains" 
          element={
            <div className="min-h-screen flex flex-col bg-zenDark">
              <Domains />
            </div>
          } 
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/domains" element={<AdminDomains />} />
        <Route path="/admin/offers" element={<AdminOffers />} />
      </Routes>
    </Router>
  );
};

export default App;