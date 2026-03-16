import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, QrCode, CreditCard, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DonateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DonateModal({ open, onOpenChange }: DonateModalProps) {
  // Replace these with your actual details
  const upiId = "your-upi-id@bank"; // e.g., "john@okicici"
  const paypalLink = "https://paypal.me/yourusername";

  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-primary flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
              <Heart className="w-6 h-6 fill-secondary" />
            </div>
            Support Sarkari Job Sewa
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Your donation helps our 24x7 crew maintain the servers and provide lightning-fast government job updates.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="upi" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="upi" className="font-bold gap-2">
              <QrCode className="w-4 h-4" /> UPI Transfer
            </TabsTrigger>
            <TabsTrigger value="paypal" className="font-bold gap-2">
              <CreditCard className="w-4 h-4" /> PayPal
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upi" className="mt-6 space-y-4">
            <div className="bg-muted/50 border rounded-lg p-6 flex flex-col items-center justify-center">
              {/* Optional: You can replace this icon with an actual QR code image later */}
              <div className="bg-white p-4 rounded-xl border shadow-sm mb-4">
                <QrCode className="w-24 h-24 text-muted-foreground opacity-50" />
                <p className="text-xs text-center text-muted-foreground mt-2">Scan with any UPI app</p>
              </div>
              
              <div className="w-full max-w-[250px]">
                <p className="text-sm font-semibold text-center mb-2">Or send directly to UPI ID:</p>
                <div className="flex bg-white border rounded-md overflow-hidden shadow-sm">
                  <input 
                    type="text" 
                    value={upiId} 
                    readOnly 
                    className="w-full px-3 py-2 text-sm font-medium bg-transparent focus:outline-none"
                  />
                  <Button 
                    onClick={handleCopyUpi} 
                    className="rounded-none font-bold"
                    variant={copied ? "secondary" : "default"}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-6 opacity-60 grayscale" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="GPay" className="h-6 opacity-60 grayscale hidden" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="paypal" className="mt-6">
            <div className="bg-muted/50 border rounded-lg p-8 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 bg-[#00457C] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                P
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">International Support</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
                  Use PayPal for fast, secure international transactions and credit card payments.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto font-bold bg-[#0070BA] hover:bg-[#003087]"
                >
                  <a href={paypalLink} target="_blank" rel="noopener noreferrer">
                    Donate via PayPal <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
