import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Domains = () => {
  return (
    <div className="min-h-screen bg-zenDark flex flex-col">
      <Navigation />
      <div className="pt-32 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
              List of Available 3 Letter .Com Domain Names
            </h1>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed animate-slideUp">
                  Three-letter .com domain names (LLL.com) are highly valuable assets in the digital marketplace due to their rarity, versatility, and prestige. With only 17,576 possible combinations, these domains are finite, making them inherently scarce and highly sought after. Their brevity and simplicity enhance memorability and brand recognition, making them ideal for businesses aiming to establish a strong online presence. LLL.com domains often transcend language barriers and can be used for acronyms, abbreviations, or initials, appealing to a wide range of industries. This adaptability, combined with the universal credibility of the .com extension, ensures their consistent demand and ability to retain or increase value over time, solidifying them as a premier digital investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Domains;