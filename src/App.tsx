import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Domains from "@/pages/Domains"
import Admin from "@/pages/Admin"
import AdminDomains from "@/pages/admin/AdminDomains"
import AdminOffers from "@/pages/admin/AdminOffers"
import Login from "@/pages/Login"
import NotFound from "@/pages/NotFound"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/domains" element={<AdminDomains />} />
        <Route path="/admin/offers" element={<AdminOffers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App