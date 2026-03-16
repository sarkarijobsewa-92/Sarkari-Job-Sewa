import { useRoute } from "wouter";
import { MOCK_JOBS } from "@/lib/mock";
import { STATES } from "@/lib/jobs-data";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Sidebar from "@/components/Sidebar";
import AdBlock from "@/components/AdBlock";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";

export default function StateJobsPage() {
  const [, params] = useRoute("/state/:slug");
  
  const stateSlug = params?.slug || "";
  const stateName = stateSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const filteredJobs = MOCK_JOBS.filter((job) => job.state === stateName);

  const renderJobsWithAds = () => {
    const items = [];
    filteredJobs.forEach((job, index) => {
      items.push(<JobCard key={job.id} job={job} data-testid={`job-card-${job.id}`} />);
      
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

  if (!STATES.includes(stateName)) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">State Not Found</h1>
            <Button onClick={() => window.location.href = "/state-government-jobs"}>
              Back to States
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-6">
        <AdBlock format="banner" className="mb-6 lg:mb-8" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between border-b pb-2">
              <h1 className="text-3xl font-bold text-primary">
                {stateName} Government Jobs
              </h1>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="flex flex-col gap-4">
                {renderJobsWithAds()}
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                <p>No jobs found for {stateName} yet.</p>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto font-semibold">
                Load More Jobs
              </Button>
            </div>
          </div>

          <Sidebar />
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
