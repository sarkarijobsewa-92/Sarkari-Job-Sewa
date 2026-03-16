import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AdBlock from "./AdBlock";

export function PopupAd() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Trigger popup on any major click
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Don't trigger on close buttons, overlays, or already-open dialogs
      if (
        target.closest('[data-testid="popup-ad"]') ||
        target.closest('button[aria-label*="close"]') ||
        target.tagName === "HTML" ||
        target.tagName === "BODY"
      ) {
        return;
      }

      // Trigger on job cards, category buttons, and nav links
      if (
        target.closest('[data-testid*="job-card"]') ||
        target.closest('button') ||
        target.closest('a[href]')
      ) {
        // Only show if not already open and randomly (30% chance to avoid spam)
        if (!open && Math.random() > 0.7) {
          setOpen(true);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        className="sm:max-w-md [&>button]:hidden" 
        data-testid="popup-ad"
      >
        <div className="relative space-y-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-0 top-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="close popup ad"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pt-4">
            <h2 className="text-lg font-bold text-primary mb-2">Special Offer</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Check out our premium job alerts and career resources to stay updated with the latest government job notifications.
            </p>

            <div className="my-4 bg-muted/50 rounded-lg p-4 border border-dashed border-border">
              <AdBlock format="rectangle" className="border-none bg-transparent" />
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 font-bold" 
                onClick={() => setOpen(false)}
              >
                Continue
              </Button>
              <Button 
                variant="outline" 
                className="flex-1" 
                onClick={() => setOpen(false)}
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
