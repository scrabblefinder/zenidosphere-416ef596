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
  price: number;
  status: string;
}

const ITEMS_PER_PAGE = 12;

const Domains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [availableCount, setAvailableCount] = useState(0);
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
    window.location.href = `mailto:info@zenullari.com?subject=Offer for ${domain.name}`;
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
                  <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                    <div className={cn(
                      "text-2xl font-bold text-domainCardLight",
                      domain.status === 'sold' ? "mb-auto mt-auto" : "mb-4"
                    )}>
                      {domain.name}
                    </div>
                    {domain.status !== 'sold' && (
                      <div className="text-xl text-domainCardLight font-semibold mb-4">
                        ${domain.price.toLocaleString()}
                      </div>
                    )}
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
      <Footer />
    </div>
  );
};

export default Domains;