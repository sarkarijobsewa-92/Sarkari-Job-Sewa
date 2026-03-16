import { CATEGORIES, QUALIFICATIONS } from "@/lib/mock";
import AdBlock from "./AdBlock";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6 flex flex-col">
      <AdBlock format="rectangle" className="hidden lg:flex" />

      {/* Qualifications List */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-primary/5 border-b border-border px-4 py-3 font-bold text-primary flex items-center justify-between">
          <span>Jobs by Qualification</span>
        </div>
        <ul className="divide-y divide-border">
          {QUALIFICATIONS.map((qual) => {
            const slug = qual.toLowerCase().replace(/ /g, '-');
            return (
              <li key={qual}>
                <Link href={`/qualification/${slug}`}>
                  <a 
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-muted/50 hover:text-primary transition-colors group"
                    data-testid={`qual-link-${slug}`}
                  >
                    {qual}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <AdBlock format="rectangle" className="hidden lg:flex" />

      {/* Categories List */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-secondary/10 border-b border-border px-4 py-3 font-bold text-secondary-foreground text-secondary flex items-center justify-between">
          <span>Popular Categories</span>
        </div>
        <ul className="divide-y divide-border">
          {CATEGORIES.map((cat, idx) => (
            <li key={idx}>
              <Link href={cat === "State Government" ? "/state-government-jobs" : `/category/${cat.toLowerCase().replace(/ /g, '-')}`}>
                <a 
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-muted/50 hover:text-secondary transition-colors group"
                  data-testid={`cat-link-${cat}`}
                >
                  {cat}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky top-20 pt-4 pb-10">
        <AdBlock format="skyscraper" className="hidden lg:flex" />
      </div>
    </aside>
  );
}
