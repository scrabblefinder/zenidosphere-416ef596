import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Domain {
  id: string;
  name: string;
  price: number;
  status: string;
}

const PremiumDomains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPremiumDomains();
  }, []);

  const fetchPremiumDomains = async () => {
    try {
      const { data, error } = await supabase
        .from("domains")
        .select("*")
        .eq("status", "available")
        .order("price", { ascending: false })
        .limit(8);

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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">Loading premium domains...</div>
      </div>
    );
  }

  return (
    <section className="bg-zenDark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Premium Domains For Sale
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <Card 
              key={domain.id}
              className="bg-domainCard border-domainCardLight/20 hover:border-domainCardLight transition-colors duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                <div className="text-xl font-bold text-domainCardLight mb-4">
                  {domain.name}
                </div>
                <div className="text-lg text-domainCardLight font-semibold mb-4">
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
    </section>
  );
};

export default PremiumDomains;