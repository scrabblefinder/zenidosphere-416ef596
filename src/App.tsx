import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zenDark">
      <Navigation />
      <Hero />
      <Welcome />
      <Footer />
    </div>
  );
};

export default App;