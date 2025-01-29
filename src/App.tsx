import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Domains from "./pages/Domains";
import DomainSale from "./pages/DomainSale";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/domains/ugr" element={<DomainSale />} />
      </Routes>
    </Router>
  );
};

export default App;