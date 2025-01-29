import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Globe, DollarSign, TrendingUp } from "lucide-react";

const DomainSale = () => {
  return (
    <div className="min-h-screen bg-zenDark">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#126e82] to-zenDark opacity-90"></div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Domain Details */}
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fadeIn">
                  UGR.com
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-12 animate-slideUp">
                  Premium Three Letter Domain Name
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <Globe className="w-8 h-8 text-zenPurple mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Rare Asset</h3>
                    <p className="text-white/80">Only 17,576 three-letter .com domains exist</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <DollarSign className="w-8 h-8 text-zenPurple mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Investment</h3>
                    <p className="text-white/80">High value retention and appreciation potential</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-zenPurple mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Brand Power</h3>
                    <p className="text-white/80">Perfect for global brand development</p>
                  </div>
                </div>

                <Card className="bg-zinc-900/50 border-zinc-800">
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
              </div>

              {/* Right Column - Price and Actions */}
              <div className="text-center md:text-right">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8">
                  <p className="text-2xl text-white/80 mb-2">Price</p>
                  <p className="text-5xl font-bold text-white mb-8">$100,000</p>
                  
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg"
                      onClick={() => window.location.href = 'tel:+12124443018'}
                    >
                      <Phone className="mr-2 h-6 w-6" />
                      Buy Now
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Make Offer
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Powered by Zenullari.com */}
            <div className="text-center mt-12">
              <p className="text-white/60">
                Powered by:{" "}
                <a 
                  href="https://zenullari.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#F97316] transition-colors"
                >
                  Zenullari.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSale;