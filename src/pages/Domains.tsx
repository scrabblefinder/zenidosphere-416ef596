import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const domains = [
  "UGR.com", "BJA.com", "UYR.com", "XFK.com", "WXA.com",
  "VYC.com", "IJH.com", "HXV.com", "UYS.com", "YFR.com",
  "HZE.com", "ZDV.com", "OJV.com", "UFJ.com", "XWE.com"
];

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
                <p className="text-gray-300 leading-relaxed mb-8 animate-slideUp">
                  Three-letter .com domain names (LLL.com) are highly valuable assets in the digital marketplace due to their rarity, versatility, and prestige. With only 17,576 possible combinations, these domains are finite, making them inherently scarce and highly sought after. Their brevity and simplicity enhance memorability and brand recognition, making them ideal for businesses aiming to establish a strong online presence.
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Domain Name</TableHead>
                      <TableHead className="text-white text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {domains.map((domain) => (
                      <TableRow key={domain}>
                        <TableCell className="text-white font-medium">{domain}</TableCell>
                        <TableCell className="text-white text-right">
                          <span className="px-2 py-1 bg-[#126e82] rounded-full text-sm">
                            Available
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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