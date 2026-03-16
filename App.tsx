import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import JobDetail from "@/pages/job-detail";
import CategoryPage from "@/pages/category";
import StatesPage from "@/pages/states";
import StateJobsPage from "@/pages/state-jobs";
import QualificationPage from "@/pages/qualification";
import { PopupAd } from "@/components/PopupAd";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/job/:id" component={JobDetail}/>
      <Route path="/category/:slug" component={CategoryPage}/>
      <Route path="/state-government-jobs" component={StatesPage}/>
      <Route path="/state/:slug" component={StateJobsPage}/>
      <Route path="/qualification/:slug" component={QualificationPage}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <PopupAd />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
