import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Domain {
  id: string;
  name: string;
  price: number;
  status: string;
}

interface OfferFormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  amount: string;
}

const PremiumDomains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<OfferFormData>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    amount: "",
  });
  const [submitting, setSubmitting] = useState(false);
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
    setSelectedDomain(domain);
    setIsModalOpen(true);
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      amount: domain.price.toString(),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDomain) return;

    setSubmitting(true);
    try {
      console.log("Saving offer to database...");
      const { error: offerError } = await supabase
        .from("offers")
        .insert([
          {
            domain_id: selectedDomain.id,
            email: formData.email,
            amount: parseFloat(formData.amount),
            message: `Offer from ${formData.name} ${formData.lastName}`,
          },
        ]);

      if (offerError) throw offerError;

      console.log("Sending email notification...");
      const response = await supabase.functions.invoke("send-offer", {
        body: {
          ...formData,
          amount: parseFloat(formData.amount),
          domainName: selectedDomain.name,
        },
      });

      if (response.error) throw new Error(response.error.message);

      console.log("Email sent successfully:", response.data);

      toast({
        title: "Success!",
        description: "Your offer has been sent successfully. We'll be in touch soon!",
        variant: "default",
      });
      
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Error submitting offer:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {domains.map((domain) => (
            <Card 
              key={domain.id}
              className="bg-domainCard border-domainCardLight/20 hover:border-domainCardLight transition-colors duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                <div className="text-xl font-bold text-domainCardLight mb-4">
                  {domain.name}
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
        <div className="flex justify-center">
          <Link to="/domains">
            <Button 
              className="bg-domainCard hover:bg-domainCard/80 text-white px-8 py-2 text-lg"
            >
              View More Domains
            </Button>
          </Link>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white/95">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-black">Make an Offer</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">First Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-black"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-black">Offer Amount (USD)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-black"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-black"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={submitting}
                className="bg-domainCard hover:bg-domainCard/80 text-white"
              >
                {submitting ? "Sending..." : "Submit Offer"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PremiumDomains;
