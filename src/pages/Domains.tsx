import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Domain {
  id: string;
  name: string;
  status: string;
}

interface OfferFormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  amount: string;
}

const ITEMS_PER_PAGE = 12;

const Domains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [availableCount, setAvailableCount] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<OfferFormData>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    amount: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchDomains();
  }, [currentPage, searchQuery]);

  const fetchDomains = async () => {
    try {
      let query = supabase
        .from("domains")
        .select("*");

      if (searchQuery) {
        query = query.ilike('name', `%${searchQuery}%`);
      }

      // Get total count of available domains
      const { data: availableDomains, error: countError } = await supabase
        .from("domains")
        .select("id")
        .eq("status", "available");

      if (countError) throw countError;
      setAvailableCount(availableDomains?.length || 0);

      const { data: totalCount } = await query;

      const { data, error } = await query
        .order("status", { ascending: true })
        .order("name")
        .range((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1);

      if (error) throw error;

      setDomains(data || []);
      setTotalPages(Math.ceil((totalCount?.length || 0) / ITEMS_PER_PAGE));
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMakeOffer = (domain: Domain) => {
    setSelectedDomain(domain);
    setIsModalOpen(true);
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      amount: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDomain) return;

    setSubmitting(true);
    try {
      console.log("Saving offer to database...");
      const { error: offerError } = await supabase
        .from("offers")
        .insert([
          {
            domain_id: selectedDomain.id,
            email: formData.email,
            amount: parseFloat(formData.amount),
            message: `Offer from ${formData.name} ${formData.lastName}`,
          },
        ]);

      if (offerError) throw offerError;

      console.log("Sending email notification...");
      const response = await supabase.functions.invoke("send-offer", {
        body: {
          ...formData,
          amount: parseFloat(formData.amount),
          domainName: selectedDomain.name,
        },
      });

      if (response.error) throw new Error(response.error.message);

      console.log("Email sent successfully:", response.data);

      toast({
        title: "Success!",
        description: "Your offer has been sent successfully. We'll be in touch soon!",
        variant: "default",
      });
      
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Error submitting offer:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-white animate-fadeIn">
                Premium Domain Names For Sale
              </h1>
              <div className="text-domainCardLight text-lg">
                {availableCount} Domains Available
              </div>
            </div>
            <Card className="bg-domainCard/50 border-domainCardLight/20 mb-8">
              <CardContent className="p-6">
                <p className="text-domainCardLight leading-relaxed animate-slideUp">
                  Premium domain names are highly valuable digital assets that can significantly impact a brand's online presence, credibility, and long-term success. These domains are typically short, memorable, keyword-rich, and often come with a strong history of trust and authority. Investing in a premium domain name gives businesses an instant competitive edge by making their brand easier to find, recall, and trust.
                </p>
              </CardContent>
            </Card>
            <div className="w-full mb-8">
              <Input
                type="search"
                placeholder="Search domains..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {domains.map((domain) => (
                <Card 
                  key={domain.id}
                  className={cn(
                    "bg-domainCard border-domainCardLight/20 hover:border-domainCardLight transition-colors duration-300",
                    domain.status === 'sold' && "opacity-50"
                  )}
                >
                  <CardContent className="p-6 flex flex-col items-center justify-between h-full min-h-[150px] space-y-8">
                    <div className={cn(
                      "text-xl font-bold text-domainCardLight text-center break-words w-full"
                    )}>
                      {domain.name}
                    </div>
                    <Button
                      onClick={() => handleMakeOffer(domain)}
                      className="w-full bg-domainCardLight hover:bg-domainCardLight/80 text-domainCard"
                      disabled={domain.status === 'sold'}
                    >
                      {domain.status === 'sold' ? 'Sold' : 'Make Offer'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }} 
                      />
                    </PaginationItem>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }} 
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white/95">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-black">Make an Offer</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">First Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-black"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-black">Offer Amount (USD)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-black"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={submitting}
                className="bg-domainCard hover:bg-domainCard/80 text-white"
              >
                {submitting ? "Sending..." : "Submit Offer"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Domains;