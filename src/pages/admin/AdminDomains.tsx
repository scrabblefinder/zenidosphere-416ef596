import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AdminSidebar from "@/components/admin/AdminSidebar"

interface Domain {
  name: string
  price: string
  offers: number
}

const AdminDomains = () => {
  const [domains] = useState<Domain[]>([
    { name: "UGR.com", price: "$100,000", offers: 1 },
    { name: "BJA.com", price: "$95,000", offers: 0 },
    { name: "UYR.com", price: "$85,000", offers: 0 },
  ])

  return (
    <div className="flex min-h-screen bg-zenDark">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">My Domains</h1>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="grid gap-6">
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">
                        {domain.name}
                      </h3>
                      <div className="mt-2 flex items-center space-x-4">
                        <Input
                          defaultValue={domain.price}
                          className="w-32 bg-gray-700 border-gray-600 text-white"
                        />
                        <span className="text-gray-400">
                          {domain.offers} offers
                        </span>
                      </div>
                    </div>
                    <Button className="bg-zenPurple hover:bg-zenPurple/90 text-white">
                      Update Price
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminDomains