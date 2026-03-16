import { Megaphone } from "lucide-react";
import { Link } from "wouter";

export default function Ticker() {
  const updates = [
    "SSC CGL 2026 Notification Released - Apply Now!",
    "Railway Technician Grade III Vacancies - 9000 Posts",
    "SBI PO Mains Result Declared",
    "UP Police Constable Admit Card 2026 Out",
    "Indian Army Agniveer Rally Schedule Updated"
  ];

  return (
    <div className="bg-primary/5 border-b border-primary/10 flex items-center overflow-hidden h-10 relative">
      <div className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1 flex items-center gap-2 h-full z-10 whitespace-nowrap shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
        <Megaphone className="w-4 h-4" />
        <span className="hidden sm:inline">LATEST UPDATES</span>
        <span className="sm:hidden">LATEST</span>
      </div>
      <div className="flex-1 overflow-hidden relative h-full">
        <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee">
          {updates.map((update, index) => (
            <span key={index} className="mx-4 text-sm font-medium hover:text-primary hover:underline cursor-pointer transition-colors flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 inline-block"></span>
              {update}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {updates.map((update, index) => (
            <span key={`dup-${index}`} className="mx-4 text-sm font-medium hover:text-primary hover:underline cursor-pointer transition-colors flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 inline-block"></span>
              {update}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
