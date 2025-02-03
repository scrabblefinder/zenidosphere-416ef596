import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trash2 } from "lucide-react";

interface Offer {
  id: string;
  domain_id: string;
  domains: {
    name: string;
  };
  email: string;
  amount: number;
  message: string;
  status: string;
  created_at: string;
}

const AdminOffers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    fetchOffers();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
    }
  };

  const fetchOffers = async () => {
    try {
      const { data, error } = await supabase
        .from("offers")
        .select(`
          *,
          domains (
            name
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOffers(data);
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

  const handleUpdateOfferStatus = async (offerId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("offers")
        .update({ status: newStatus })
        .eq("id", offerId);

      if (error) throw error;

      fetchOffers();
      toast({
        title: "Success",
        description: `Offer ${newStatus}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteOffer = async (offerId: string) => {
    try {
      const { error } = await supabase
        .from("offers")
        .delete()
        .eq("id", offerId);

      if (error) throw error;

      fetchOffers();
      toast({
        title: "Success",
        description: "Offer deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-zenDark">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="bg-white/10 rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">My Offers</h1>
            <Button
              onClick={() => navigate("/admin/domains")}
              className="bg-[#126e82] hover:bg-[#126e82]/80"
            >
              View Domains
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Domain</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Amount</TableHead>
                <TableHead className="text-white">Message</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="text-white">
                    {offer.domains?.name}
                  </TableCell>
                  <TableCell className="text-white">{offer.email}</TableCell>
                  <TableCell className="text-white">
                    ${offer.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-white">{offer.message}</TableCell>
                  <TableCell className="text-white">{offer.status}</TableCell>
                  <TableCell className="text-white">
                    {new Date(offer.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {offer.status === "pending" && (
                        <>
                          <Button
                            onClick={() =>
                              handleUpdateOfferStatus(offer.id, "accepted")
                            }
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={() =>
                              handleUpdateOfferStatus(offer.id, "rejected")
                            }
                            variant="destructive"
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      <Button
                        onClick={() => handleDeleteOffer(offer.id)}
                        variant="ghost"
                        className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminOffers;