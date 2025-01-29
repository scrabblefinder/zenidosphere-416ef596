import { Home, Package, MessageSquare } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/admin",
    },
    {
      title: "My Domains",
      icon: Package,
      path: "/admin/domains",
    },
    {
      title: "My Offers",
      icon: MessageSquare,
      path: "/admin/offers",
    },
  ]

  return (
    <div className="h-screen w-64 bg-zenDark border-r border-gray-800">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white mb-8">Admin Panel</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-zenPurple text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default AdminSidebar