import { useRoute } from "wouter";
import { MOCK_JOBS } from "@/lib/mock";
import { getJobLinks } from "@/lib/real-job-links";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Sidebar from "@/components/Sidebar";
import AdBlock from "@/components/AdBlock";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, Users, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function JobDetail() {
  const [, params] = useRoute("/job/:id");
  const job = MOCK_JOBS.find((j) => j.id === params?.id);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <Button onClick={() => window.location.href = "/"}>Back to Home</Button>
          </div>
        </div>
      </div>
    );
  }

  const jobLinks = getJobLinks(job.id);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Ticker />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <nav className="flex text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-foreground truncate">{job.title}</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 leading-tight">
              {job.title}
            </h1>

            <AdBlock format="banner" className="mb-6" text="Top Article Ad" />

            <div className="bg-card border rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="bg-primary text-primary-foreground px-6 py-4 font-bold text-lg">
                Job Overview
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Organization</p>
                      <p className="font-semibold">{job.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total Vacancies</p>
                      <p className="font-semibold">{job.vacancies > 0 ? job.vacancies : "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Qualification</p>
                      <p className="font-semibold">{job.qualification}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Start Date</p>
                      <p className="font-semibold">{new Date(job.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Last Date</p>
                      <p className="font-semibold text-destructive">{new Date(job.lastDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Location</p>
                      <p className="font-semibold">{job.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdBlock format="banner" className="mb-8" text="Mid Article Ad" />

            <div className="prose prose-sm max-w-none mb-8">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-secondary pl-3 uppercase">Detailed Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {jobLinks.applyLink && jobLinks.applyLink !== "#" ? (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14">
                  <a href={jobLinks.applyLink} target="_blank" rel="noopener noreferrer" data-testid="apply-button">
                    <ExternalLink className="mr-2 h-5 w-5" /> APPLY ONLINE
                  </a>
                </Button>
              ) : (
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14" disabled data-testid="apply-button-disabled">
                  <ExternalLink className="mr-2 h-5 w-5" /> APPLY ONLINE
                </Button>
              )}
              {jobLinks.notificationPdf && jobLinks.notificationPdf !== "#" ? (
                <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 font-bold h-14">
                  <a href={jobLinks.notificationPdf} target="_blank" rel="noopener noreferrer" data-testid="notification-button">
                    <FileText className="mr-2 h-5 w-5" /> OFFICIAL NOTIFICATION
                  </a>
                </Button>
              ) : (
                <Button variant="outline" size="lg" className="border-secondary text-secondary font-bold h-14" disabled data-testid="notification-button-disabled">
                  <FileText className="mr-2 h-5 w-5" /> OFFICIAL NOTIFICATION
                </Button>
              )}
            </div>

            <AdBlock format="banner" className="mb-8" text="Bottom Article Ad" />
          </div>

          <Sidebar />
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-10 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-xl mb-4">Sarkari Job Sewa</p>
          <p className="text-sm opacity-60 max-w-2xl mx-auto">
            Disclaimer: We are not a government agency. We provide information based on official notifications for easy access.
          </p>
        </div>
      </footer>
    </div>
  );
}
