import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Domains from "@/pages/Domains"
import Admin from "@/pages/Admin"
import NotFound from "@/pages/NotFound"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App