import { useState } from "react";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Sidebar from "@/components/Sidebar";
import AdBlock from "@/components/AdBlock";
import JobCard from "@/components/JobCard";
import { MOCK_JOBS } from "@/lib/mock";
import { UnlockPopup } from "@/components/UnlockPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const categories = ["Latest Jobs", "Admit Cards", "Results", "Answer Keys", "Syllabus"];
  const [activeCategory, setActiveCategory] = useState("Latest Jobs");

  const filteredJobs = MOCK_JOBS.filter(job => job.category === activeCategory);

  // Inject ads between every 3 jobs
  const renderJobsWithAds = () => {
    const items = [];
    filteredJobs.forEach((job, index) => {
      items.push(<JobCard key={job.id} job={job} />);
      
      // Add an ad after every 3rd job
      if ((index + 1) % 3 === 0 && index !== filteredJobs.length - 1) {
        items.push(
          <div key={`ad-${index}`} className="py-2">
            <AdBlock format="banner" text="In-feed Advertisement" />
          </div>
        );
      }
    });
    return items;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <UnlockPopup />
      <Header />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Top Banner Ad */}
        <AdBlock format="banner" className="mb-6 lg:mb-8" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h1 className="text-2xl font-bold text-foreground">Government Job Updates</h1>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button 
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "rounded-full font-bold",
                      activeCategory === cat ? "bg-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              {filteredJobs.length > 0 ? renderJobsWithAds() : (
                <div className="text-center py-10 text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                  No notifications found for this category yet.
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto font-semibold">Load More Jobs</Button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      {/* Footer Ad */}
      <div className="container mx-auto px-4 py-6 border-t mt-10">
        <AdBlock format="banner" />
      </div>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-xl mb-4 uppercase tracking-wider">Sarkari Job Sewa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-primary-foreground/80 mb-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Sarkari Job Sewa. All rights reserved. <br/>
            Disclaimer: We are not affiliated with any government organization. All information provided is collected from official sources for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
