import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

interface DomainOffer {
  email: string
  amount: string
  date: string
}

interface DomainWithOffers {
  name: string
  price: string
  offers: DomainOffer[]
}

const Admin = () => {
  const [domains, setDomains] = useState<DomainWithOffers[]>([
    {
      name: "UGR.com",
      price: "$100,000",
      offers: [
        { email: "interested@example.com", amount: "$90,000", date: "2024-03-15" },
      ],
    },
    {
      name: "BJA.com",
      price: "$95,000",
      offers: [],
    },
    {
      name: "UYR.com",
      price: "$85,000",
      offers: [],
    },
    {
      name: "XFK.com",
      price: "$92,000",
      offers: [],
    },
    {
      name: "WXA.com",
      price: "$88,000",
      offers: [],
    },
    {
      name: "VYC.com",
      price: "$97,000",
      offers: [],
    },
    {
      name: "IJH.com",
      price: "$94,000",
      offers: [],
    },
    {
      name: "HXV.com",
      price: "$89,000",
      offers: [],
    },
    {
      name: "UYS.com",
      price: "$93,000",
      offers: [],
    },
    {
      name: "YFR.com",
      price: "$86,000",
      offers: [],
    },
    {
      name: "HZE.com",
      price: "$91,000",
      offers: [],
    },
    {
      name: "ZDV.com",
      price: "$87,000",
      offers: [],
    },
    {
      name: "OJV.com",
      price: "$96,000",
      offers: [],
    },
    {
      name: "UFJ.com",
      price: "$90,000",
      offers: [],
    },
    {
      name: "XWE.com",
      price: "$98,000",
      offers: [],
    },
  ])

  const [editingDomain, setEditingDomain] = useState<string | null>(null)
  const [newPrice, setNewPrice] = useState("")

  const handleUpdatePrice = (domainName: string) => {
    setDomains((prevDomains) =>
      prevDomains.map((domain) =>
        domain.name === domainName
          ? { ...domain, price: newPrice }
          : domain
      )
    )
    setEditingDomain(null)
    setNewPrice("")
  }

  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">
              Domain Management Panel
            </h1>
            <Card className="bg-domainCard/50 border-domainCardLight/20">
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-domainCardLight">Domain</TableHead>
                      <TableHead className="text-domainCardLight">Price</TableHead>
                      <TableHead className="text-domainCardLight">Offers</TableHead>
                      <TableHead className="text-domainCardLight">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {domains.map((domain) => (
                      <TableRow key={domain.name}>
                        <TableCell className="text-domainCardLight">
                          {domain.name}
                        </TableCell>
                        <TableCell className="text-domainCardLight">
                          {editingDomain === domain.name ? (
                            <div className="flex gap-2">
                              <Input
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                                className="w-32"
                              />
                              <Button
                                onClick={() => handleUpdatePrice(domain.name)}
                                className="bg-domainCardLight text-domainCard hover:bg-domainCardLight/80"
                              >
                                Save
                              </Button>
                            </div>
                          ) : (
                            domain.price
                          )}
                        </TableCell>
                        <TableCell className="text-domainCardLight">
                          {domain.offers.length}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                setEditingDomain(domain.name)
                                setNewPrice(domain.price)
                              }}
                              className="bg-domainCardLight text-domainCard hover:bg-domainCardLight/80"
                            >
                              Edit Price
                            </Button>
                            <Sheet>
                              <SheetTrigger asChild>
                                <Button
                                  className="bg-domainCardLight text-domainCard hover:bg-domainCardLight/80"
                                >
                                  View Offers
                                </Button>
                              </SheetTrigger>
                              <SheetContent>
                                <SheetHeader>
                                  <SheetTitle>Offers for {domain.name}</SheetTitle>
                                  <SheetDescription>
                                    Review all offers received for this domain
                                  </SheetDescription>
                                </SheetHeader>
                                <div className="mt-6">
                                  {domain.offers.length > 0 ? (
                                    domain.offers.map((offer, index) => (
                                      <Card key={index} className="mb-4">
                                        <CardContent className="p-4">
                                          <p>Email: {offer.email}</p>
                                          <p>Amount: {offer.amount}</p>
                                          <p>Date: {offer.date}</p>
                                        </CardContent>
                                      </Card>
                                    ))
                                  ) : (
                                    <p>No offers received yet</p>
                                  )}
                                </div>
                              </SheetContent>
                            </Sheet>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
