import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AdminSidebar from "@/components/admin/AdminSidebar"

interface Offer {
  domain: string
  email: string
  amount: string
  date: string
  status: "pending" | "accepted" | "rejected"
}

const AdminOffers = () => {
  const [offers] = useState<Offer[]>([
    {
      domain: "UGR.com",
      email: "interested@example.com",
      amount: "$90,000",
      date: "2024-03-15",
      status: "pending",
    },
  ])

  return (
    <div className="flex min-h-screen bg-zenDark">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">My Offers</h1>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="grid gap-6">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1 grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Domain</p>
                        <p className="text-white">{offer.domain}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">{offer.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Amount</p>
                        <p className="text-white">{offer.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="text-white">{offer.date}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Accept
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Reject
                      </Button>
                    </div>
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

export default AdminOffers