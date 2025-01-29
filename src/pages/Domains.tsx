import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface DomainCard {
  name: string;
  price: string;
}

const domains: DomainCard[] = [
  { name: "UGR.com", price: "$100,000" },
  { name: "BJA.com", price: "$95,000" },
  { name: "UYR.com", price: "$85,000" },
  { name: "XFK.com", price: "$92,000" },
  { name: "WXA.com", price: "$88,000" },
  { name: "VYC.com", price: "$94,000" },
  { name: "IJH.com", price: "$89,000" },
  { name: "HXV.com", price: "$86,000" },
  { name: "UYS.com", price: "$91,000" },
  { name: "YFR.com", price: "$87,000" },
  { name: "HZE.com", price: "$93,000" },
  { name: "ZDV.com", price: "$96,000" },
  { name: "OJV.com", price: "$90,000" },
  { name: "UFJ.com", price: "$97,000" },
  { name: "XWE.com", price: "$84,000" },
];

const Domains = () => {
  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
              Premium Domain Names For Sale
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {domains.map((domain) => (
                <Card key={domain.name} className="bg-zinc-900/50 border-zinc-800 hover:border-zenPurple transition-colors duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                    <div className="text-2xl font-bold text-white mb-4">{domain.name}</div>
                    <div className="space-y-4 w-full">
                      <div className="text-xl text-zenPurple font-semibold">{domain.price}</div>
                      <Button 
                        className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                        onClick={() => window.location.href = `mailto:info@zenullari.com?subject=Interest in ${domain.name}`}
                      >
                        Make Offer
                      </Button>
                    </div>
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