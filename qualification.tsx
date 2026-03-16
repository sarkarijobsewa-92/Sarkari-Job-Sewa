import { useRoute } from "wouter";
import { MOCK_JOBS } from "@/lib/mock";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Sidebar from "@/components/Sidebar";
import AdBlock from "@/components/AdBlock";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";

const qualificationMap: Record<string, string> = {
  "10th-pass-govt-jobs": "10th Pass",
  "12th-pass-govt-jobs": "12th Pass",
  "iti-jobs": "ITI",
  "diploma-jobs": "Diploma",
  "graduate-jobs": "Any Graduate",
  "post-graduate-jobs": "M.Tech",
};

export default function QualificationPage() {
  const [, params] = useRoute("/qualification/:slug");
  
  const slug = params?.slug || "";
  const qualificationName = qualificationMap[slug] || slug;

  // Filter jobs by qualification (partial match for flexibility)
  const filteredJobs = MOCK_JOBS.filter((job) => {
    const jobQual = job.qualification.toLowerCase();
    return (
      jobQual.includes(qualificationName.toLowerCase()) ||
      jobQual.includes("any graduate") ||
      jobQual.includes("graduate")
    );
  });

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-6">
        <AdBlock format="banner" className="mb-6 lg:mb-8" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between border-b pb-2">
              <h1 className="text-3xl font-bold text-primary capitalize">
                {slug.replace(/-/g, " ")} Jobs
              </h1>
              <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {filteredJobs.length} Jobs
              </span>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="flex flex-col gap-4">
                {renderJobsWithAds()}
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                <p>No jobs found for this qualification yet.</p>
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
