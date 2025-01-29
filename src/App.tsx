import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Domains from "./pages/Domains";

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
        <Route path="/domains" element={<Domains />} />
      </Routes>
    </Router>
  );
};

export default App;