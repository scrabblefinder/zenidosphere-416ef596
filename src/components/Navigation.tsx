import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-zenDark border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold">
            Domain Broker
          </Link>
          <div className="flex space-x-4">
            <Link to="/domains">
              <Button variant="ghost" className="text-white hover:text-gray-300">
                Domains
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="ghost" className="text-white hover:text-gray-300">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation