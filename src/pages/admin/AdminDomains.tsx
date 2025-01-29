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
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Domain {
  id: string;
  name: string;
  price: number;
  status: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Domain name is required"),
  price: z.coerce.number().min(0, "Price must be a positive number"),
});

const AdminDomains = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingDomain, setEditingDomain] = useState<Domain | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
    },
  });

  useEffect(() => {
    checkUser();
    fetchDomains();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
    }
  };

  const fetchDomains = async () => {
    try {
      const { data, error } = await supabase
        .from("domains")
        .select("*")
        .order("name");

      if (error) throw error;
      setDomains(data);
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

  const handleUpdateDomain = async (domain: Domain) => {
    try {
      const { error } = await supabase
        .from("domains")
        .update({
          price: Number(domain.price),
          status: domain.status,
        })
        .eq("id", domain.id);

      if (error) throw error;

      setEditingDomain(null);
      fetchDomains();
      toast({
        title: "Success",
        description: "Domain updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase
        .from("domains")
        .insert([
          {
            name: values.name,
            price: Number(values.price),
            status: "available",
          },
        ]);

      if (error) throw error;

      form.reset();
      setIsDialogOpen(false);
      fetchDomains();
      toast({
        title: "Success",
        description: "Domain added successfully",
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
            <h1 className="text-2xl font-bold text-white">My Domains</h1>
            <div className="space-x-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#126e82] hover:bg-[#126e82]/80">
                    Add Domain
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Domain</DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Domain Name</FormLabel>
                            <FormControl>
                              <Input placeholder="example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="10000" 
                                {...field}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">Add Domain</Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => navigate("/admin/offers")}
                className="bg-[#126e82] hover:bg-[#126e82]/80"
              >
                View Offers
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Domain</TableHead>
                <TableHead className="text-white">Price</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell className="text-white">{domain.name}</TableCell>
                  <TableCell className="text-white">
                    {editingDomain?.id === domain.id ? (
                      <Input
                        type="number"
                        value={editingDomain.price}
                        onChange={(e) =>
                          setEditingDomain({
                            ...editingDomain,
                            price: Number(e.target.value),
                          })
                        }
                        className="bg-white/5 border-white/10 text-white w-32"
                      />
                    ) : (
                      `$${domain.price.toLocaleString()}`
                    )}
                  </TableCell>
                  <TableCell className="text-white">
                    {editingDomain?.id === domain.id ? (
                      <select
                        value={editingDomain.status}
                        onChange={(e) =>
                          setEditingDomain({
                            ...editingDomain,
                            status: e.target.value,
                          })
                        }
                        className="bg-white/5 border-white/10 text-white rounded p-2"
                      >
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                        <option value="pending">Pending</option>
                      </select>
                    ) : (
                      domain.status
                    )}
                  </TableCell>
                  <TableCell>
                    {editingDomain?.id === domain.id ? (
                      <div className="space-x-2">
                        <Button
                          onClick={() => handleUpdateDomain(editingDomain)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Save
                        </Button>
                        <Button
                          onClick={() => setEditingDomain(null)}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => setEditingDomain(domain)}
                        className="bg-[#126e82] hover:bg-[#126e82]/80"
                      >
                        Edit
                      </Button>
                    )}
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

export default AdminDomains;