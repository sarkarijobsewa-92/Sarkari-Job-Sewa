import { Link } from "wouter";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import AdBlock from "@/components/AdBlock";
import { STATES } from "@/lib/jobs-data";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function StatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-6">
        <AdBlock format="banner" className="mb-8" />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">State Government Jobs</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Select a state to view all government job vacancies available in that state.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {STATES.map((state) => (
              <Link key={state} href={`/state/${state.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 justify-start text-left font-bold hover:border-primary hover:bg-primary/5 transition-all group"
                  data-testid={`state-button-${state}`}
                >
                  <MapPin className="w-5 h-5 mr-2 text-primary flex-shrink-0 group-hover:text-secondary transition-colors" />
                  <span className="group-hover:text-primary transition-colors">{state}</span>
                </Button>
              </Link>
            ))}
          </div>

          <AdBlock format="banner" />
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-secondary mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-xl mb-4 uppercase">Sarkari Job Sewa</p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Sarkari Job Sewa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
