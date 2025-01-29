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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [extension, setExtension] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [lengthRange, setLengthRange] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    fetchDomains();
  }, [currentPage, searchQuery, extension, priceRange, lengthRange]);

  const fetchDomains = async () => {
    try {
      let query = supabase
        .from("domains")
        .select("*");

      if (searchQuery) {
        query = query.ilike('name', `%${searchQuery}%`);
      }

      if (extension) {
        query = query.ilike('name', `%${extension}`);
      }

      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        query = query.gte('price', min).lte('price', max);
      }

      if (lengthRange) {
        const [min, max] = lengthRange.split('-').map(Number);
        // Using raw SQL function length() to filter by domain name length
        query = query.filter('length(name)', 'gte', min)
                    .filter('length(name)', 'lte', max);
      }

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
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
              Premium Domain Names For Sale
            </h1>
            <Card className="bg-domainCard/50 border-domainCardLight/20 mb-8">
              <CardContent className="p-6">
                <p className="text-domainCardLight leading-relaxed animate-slideUp">
                  Premium domain names are highly valuable digital assets that can significantly impact a brand's online presence, credibility, and long-term success. These domains are typically short, memorable, keyword-rich, and often come with a strong history of trust and authority. Investing in a premium domain name gives businesses an instant competitive edge by making their brand easier to find, recall, and trust.
                </p>
              </CardContent>
            </Card>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <Input
                type="search"
                placeholder="Search domains..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full h-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select value={extension} onValueChange={setExtension}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Domain Extension" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Extensions</SelectItem>
                    <SelectItem value=".com">.com</SelectItem>
                    <SelectItem value=".net">.net</SelectItem>
                    <SelectItem value=".org">.org</SelectItem>
                    <SelectItem value=".io">.io</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Price</SelectItem>
                    <SelectItem value="0-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-999999">$10,000+</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={lengthRange} onValueChange={setLengthRange}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Domain Length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Length</SelectItem>
                    <SelectItem value="1-3">1-3 Characters</SelectItem>
                    <SelectItem value="4-6">4-6 Characters</SelectItem>
                    <SelectItem value="7-10">7-10 Characters</SelectItem>
                    <SelectItem value="11-999">11+ Characters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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