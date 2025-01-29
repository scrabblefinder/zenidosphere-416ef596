import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Domains from "./pages/Domains";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
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
      <Route path="/domains" element={<Domains />} />
    </Routes>
  );
};

export default App;