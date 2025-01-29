import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Globe, DollarSign, TrendingUp } from "lucide-react";

const DomainSale = () => {
  return (
    <div className="min-h-screen bg-zenDark">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#126e82] to-zenDark opacity-90"></div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fadeIn">
              UGR.com
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 animate-slideUp">
              Premium Three Letter Domain Name
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Globe className="w-8 h-8 text-zenPurple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Rare Asset</h3>
                <p className="text-white/80">Only 17,576 three-letter .com domains exist</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <DollarSign className="w-8 h-8 text-zenPurple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Investment</h3>
                <p className="text-white/80">High value retention and appreciation potential</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 text-zenPurple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Brand Power</h3>
                <p className="text-white/80">Perfect for global brand development</p>
              </div>
            </div>

            <Card className="bg-zinc-900/50 border-zinc-800 mb-12">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="text-gray-300 space-y-4">
                    <p className="text-lg">
                      UGR.com is a premium three-letter .com domain name, representing a rare digital asset in today's online landscape.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-white font-semibold mb-3">Perfect For:</h3>
                        <ul className="list-disc list-inside space-y-2 text-white/80">
                          <li>Startups seeking premium branding</li>
                          <li>Established companies rebranding</li>
                          <li>Digital asset investors</li>
                          <li>Global brands</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-3">Key Benefits:</h3>
                        <ul className="list-disc list-inside space-y-2 text-white/80">
                          <li>Exceptional memorability</li>
                          <li>Universal appeal</li>
                          <li>Extreme scarcity</li>
                          <li>Strong brand potential</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full sm:w-auto text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:+12124443018'}
              >
                <Phone className="mr-2 h-6 w-6" />
                Buy Now - Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSale;