import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Domain {
  id: string;
  name: string;
  price: number;
  status: string;
}

const Domains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const { data, error } = await supabase
        .from("domains")
        .select("*")
        .eq("status", "available")
        .order("name");

      if (error) throw error;

      setDomains(data || []);
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

  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
              Premium Three Letter Domains For Sale
            </h1>
            <Card className="bg-domainCard/50 border-domainCardLight/20 mb-8">
              <CardContent className="p-6">
                <p className="text-domainCardLight leading-relaxed animate-slideUp">
                  Three-letter .com domain names (LLL.com) are highly valuable digital assets. With only 17,576 possible combinations, these domains are inherently scarce and sought after. Their brevity makes them perfect for building memorable brands.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {domains.map((domain) => (
                <Card 
                  key={domain.id}
                  className="bg-domainCard border-domainCardLight/20 hover:border-domainCardLight transition-colors duration-300"
                >
                  <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                    <div className="text-2xl font-bold text-domainCardLight mb-4">{domain.name}</div>
                    <div className="text-xl text-domainCardLight font-semibold mb-4">
                      ${domain.price.toLocaleString()}
                    </div>
                    <Button
                      onClick={() => handleMakeOffer(domain)}
                      className="w-full bg-domainCardLight hover:bg-domainCardLight/80 text-domainCard"
                    >
                      Make Offer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Domains;