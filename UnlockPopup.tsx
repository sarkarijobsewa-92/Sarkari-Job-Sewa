import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle, ShieldCheck } from "lucide-react";
import AdBlock from "./AdBlock";

export function UnlockPopup() {
  const [open, setOpen] = useState(false);
  const [adWatched, setAdWatched] = useState(false);
  const [timer, setTimer] = useState(5); // Simulate a 5 second ad

  useEffect(() => {
    // Check if user has unlocked in last 24h
    const unlockedTime = localStorage.getItem("sjs_unlocked");
    const now = new Date().getTime();
    
    if (!unlockedTime || now - parseInt(unlockedTime) > 24 * 60 * 60 * 1000) {
      // Small delay before showing to let page load
      const timeout = setTimeout(() => {
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (open && !adWatched && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !adWatched) {
      setAdWatched(true);
    }
  }, [open, timer, adWatched]);

  const handleUnlock = () => {
    localStorage.setItem("sjs_unlocked", new Date().getTime().toString());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={open ? undefined : setOpen}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-primary flex flex-col items-center gap-2">
            <ShieldCheck className="w-12 h-12 text-secondary" />
            Unlock Full Access
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Watch a short ad to unlock full access to Sarkari Job Sewa for 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-muted/30 border rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden">
            {!adWatched ? (
              <>
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  Ad • {timer}s
                </div>
                <PlayCircle className="w-12 h-12 text-muted-foreground/40 mb-2 animate-pulse" />
                <p className="text-sm font-medium text-muted-foreground">Video Advertisement Playing...</p>
                <AdBlock format="rectangle" className="absolute inset-0 opacity-20 border-none pointer-events-none" />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-green-600 gap-2">
                <ShieldCheck className="w-12 h-12" />
                <p className="font-bold">Access Unlocked!</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            className="w-full font-bold" 
            size="lg"
            onClick={handleUnlock}
            disabled={!adWatched}
          >
            {adWatched ? "Continue to Site" : `Please wait (${timer}s)...`}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By unlocking, you support our 24x7 crew to bring you the latest updates.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
