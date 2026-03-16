import { useState } from "react";
import { Link } from "wouter";
import { Search, Menu, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DonateModal } from "@/components/DonateModal";
import logo from "@assets/ChatGPT_Image_Mar_7,_2026,_11_04_29_PM_1773082887112.png";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      console.log("Search:", searchQuery);
    }
  };

  return (
    <>
      <DonateModal open={donateOpen} onOpenChange={setDonateOpen} />
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top Bar - Highlighting Support */}
      <div className="bg-primary text-primary-foreground py-1 px-4 text-xs text-center sm:text-left flex justify-between items-center">
        <span className="hidden sm:inline-block">Welcome to Sarkari Job Sewa - Latest Govt Job Updates</span>
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span>Support our 24x7 crew:</span>
          <Button 
            size="sm" 
            variant="secondary" 
            className="h-6 text-xs font-bold gap-1 px-3 hover:scale-105 transition-transform" 
            data-testid="donate-button"
            onClick={() => setDonateOpen(true)}
          >
            <Heart className="w-3 h-3 fill-white" /> DONATE
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img src={logo} alt="Sarkari Job Sewa Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl font-black text-primary uppercase tracking-tight leading-none">
                Sarkari <span className="text-secondary">Job</span>
              </span>
              <span className="text-sm md:text-2xl font-black text-primary uppercase tracking-tight leading-none">
                <span className="text-secondary">Sewa</span>
              </span>
              <span className="text-[8px] md:text-xs text-muted-foreground font-bold -mt-0.5 tracking-wider uppercase">Latest Govt Jobs</span>
            </div>
          </a>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search jobs, admit cards, results..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              data-testid="search-input-desktop"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
          <Link href="/"><a className="hover:text-primary transition-colors" data-testid="nav-home">Home</a></Link>
          <Link href="/"><a className="hover:text-primary transition-colors" data-testid="nav-latest">Latest Jobs</a></Link>
          <Link href="/"><a className="hover:text-primary transition-colors" data-testid="nav-admit">Admit Card</a></Link>
          <Link href="/"><a className="hover:text-primary transition-colors" data-testid="nav-results">Results</a></Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            data-testid="mobile-search-button"
          >
            <Search className="w-5 h-5" />
          </Button>
          
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full" 
                data-testid="mobile-menu-button"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-primary/5">
                  <span className="font-bold text-primary">Menu</span>
                  <SheetTrigger asChild>
                    <button className="p-1 hover:bg-muted rounded transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                </div>

                {/* Mobile Search */}
                <div className="p-4 border-b">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search jobs..." 
                      className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      data-testid="search-input-mobile"
                    />
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-2">
                    <Link href="/">
                      <a onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted font-medium text-foreground transition-colors" data-testid="mobile-nav-home">Home</a>
                    </Link>
                    <Link href="/">
                      <a onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted font-medium text-foreground transition-colors" data-testid="mobile-nav-latest">Latest Jobs</a>
                    </Link>
                    <Link href="/">
                      <a onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted font-medium text-foreground transition-colors" data-testid="mobile-nav-admit">Admit Card</a>
                    </Link>
                    <Link href="/">
                      <a onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted font-medium text-foreground transition-colors" data-testid="mobile-nav-results">Results</a>
                    </Link>
                  </div>

                  <div className="px-4 py-4 border-t">
                    <h3 className="font-bold text-sm text-primary mb-3">Categories</h3>
                    <div className="space-y-2">
                      <Link href="/category/bank-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-bank">Bank Jobs</a>
                      </Link>
                      <Link href="/category/railway-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-railway">Railway Jobs</a>
                      </Link>
                      <Link href="/category/defence-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-defence">Defence Jobs</a>
                      </Link>
                      <Link href="/category/police-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-police">Police Jobs</a>
                      </Link>
                      <Link href="/category/teaching-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-teaching">Teaching Jobs</a>
                      </Link>
                      <Link href="/state-government-jobs">
                        <a onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 rounded text-sm hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-cat-state">State Government</a>
                      </Link>
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t bg-muted/50">
                  <Button 
                    className="w-full font-bold gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                    size="sm"
                    onClick={() => {
                      setMobileOpen(false);
                      setDonateOpen(true);
                    }}
                  >
                    <Heart className="w-4 h-4 fill-white" /> Donate Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Tricolor Bottom Border */}
      <div className="h-1 w-full flex">
        <div className="h-full flex-1 bg-[#FF671F]"></div>
        <div className="h-full flex-1 bg-white"></div>
        <div className="h-full flex-1 bg-[#046A38]"></div>
      </div>
    </header>
    </>
  );
}
