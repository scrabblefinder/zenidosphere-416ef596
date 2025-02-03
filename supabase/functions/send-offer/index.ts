import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OfferEmailRequest {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  amount: number;
  domainName: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, lastName, email, phone, amount, domainName }: OfferEmailRequest = await req.json();

    console.log("Sending email for domain offer:", {
      domainName,
      amount,
      email,
      name,
      lastName,
      phone,
    });

    const emailResponse = await resend.emails.send({
      from: "Zenullari Domains <onboarding@resend.dev>",
      to: ["domains@zenullari.com"],
      subject: `New Offer for ${domainName}`,
      html: `
        <h1>New Domain Offer Received</h1>
        <p><strong>Domain Name:</strong> ${domainName}</p>
        <p><strong>Offer Amount:</strong> $${amount.toLocaleString()}</p>
        <h2>Contact Information:</h2>
        <p><strong>Name:</strong> ${name} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-offer function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);