import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Building2, MapPin, GraduationCap } from "lucide-react";
import { Job } from "@/lib/mock";
import { Link } from "wouter";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 sm:p-5 hover:shadow-md transition-all hover:border-primary/30 flex flex-col gap-3 group relative overflow-hidden">
      <div className="absolute top-0 right-0 flex">
        {job.isNew && (
          <div className="bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 uppercase">
            NEW
          </div>
        )}
        {job.isUpdatedToday && (
          <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 uppercase">
            Updated Today
          </div>
        )}
        {job.isLastDateSoon && (
          <div className="bg-secondary text-white text-[10px] font-bold px-2 py-1 uppercase">
            Last Date Soon
          </div>
        )}
      </div>
      
      <div>
        <div className="flex items-start justify-between gap-4 mb-1">
          <Link href={`/job/${job.id}`}>
            <a className="text-base sm:text-lg font-bold text-primary hover:text-secondary hover:underline transition-colors leading-tight line-clamp-2">
              {job.title}
            </a>
          </Link>
        </div>
        <div className="flex items-center text-muted-foreground text-sm gap-1.5 font-medium">
          <Building2 className="w-3.5 h-3.5" />
          {job.organization}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm mt-1">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-muted-foreground/70" />
          <span className="text-foreground/80 font-medium truncate" title={job.qualification}>
            {job.qualification}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground/70" />
          <span className="text-foreground/80 font-medium truncate">{job.state}</span>
        </div>
        <div className="flex items-center gap-2 text-destructive font-semibold">
          <Calendar className="w-4 h-4" />
          <span>Last Date: {new Date(job.lastDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 pt-3 border-t border-border/50">
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors">
          {job.category}
        </Badge>
        <Link href={`/job/${job.id}`}>
          <Button size="sm" className="font-semibold bg-primary hover:bg-primary/90 text-xs shadow-sm">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
