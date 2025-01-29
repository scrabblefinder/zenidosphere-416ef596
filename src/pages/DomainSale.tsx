import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const DomainSale = () => {
  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
              UGR.com - Premium Three Letter Domain
            </h1>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="space-y-6 animate-slideUp">
                  <div className="text-3xl font-bold text-zenPurple mb-4">
                    UGR.com
                  </div>
                  
                  <div className="text-gray-300 space-y-4">
                    <p>
                      UGR.com is a premium three-letter .com domain name, representing a rare digital asset in today's online landscape. Three-letter domains are highly sought after due to their:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Exceptional memorability and brandability</li>
                      <li>Universal appeal and versatility</li>
                      <li>Scarcity (only 17,576 possible combinations)</li>
                      <li>Strong potential for brand development</li>
                      <li>High value retention and appreciation potential</li>
                    </ul>

                    <p className="mt-6">
                      This domain is perfect for:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Startups looking for a premium brand name</li>
                      <li>Established companies rebranding</li>
                      <li>Digital asset investors</li>
                      <li>Global brands seeking a memorable online presence</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      className="bg-[#126e82] hover:bg-[#126e82]/90 text-white w-full sm:w-auto"
                      onClick={() => window.location.href = 'tel:+12124443018'}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact to Purchase
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DomainSale;