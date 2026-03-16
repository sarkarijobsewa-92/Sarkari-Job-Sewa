import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AdBlockProps {
  className?: string;
  format?: "banner" | "rectangle" | "skyscraper";
  text?: string;
}

export default function AdBlock({ className, format = "banner", text = "Advertisement" }: AdBlockProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div 
      className={cn(
        "bg-muted/10 flex items-center justify-center overflow-hidden",
        format === "banner" && "w-full min-h-[90px] md:min-h-[120px]",
        format === "rectangle" && "w-full aspect-video sm:aspect-[4/3] max-w-sm mx-auto",
        format === "skyscraper" && "w-full min-h-[600px]",
        className
      )}
    >
      <ins
        ref={adRef}
        className="adsbygoogle w-full h-full block"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4880652522288680"
        data-ad-slot={format === "banner" ? "auto" : format === "skyscraper" ? "auto" : "auto"} // You would replace these with actual slot IDs
        data-ad-format={format === "banner" ? "horizontal" : format === "skyscraper" ? "vertical" : "rectangle"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
