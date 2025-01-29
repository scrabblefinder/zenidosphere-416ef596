import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Domains from "./pages/Domains";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>
    </Router>
  );
};

export default App;