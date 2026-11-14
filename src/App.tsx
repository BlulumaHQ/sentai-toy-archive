import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import SeasonDetail from "./pages/SeasonDetail";
import Mecha from "./pages/Mecha";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <SiteHeader />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/season/:id" element={<SeasonDetail />} />
                <Route path="/mecha" element={<Mecha />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <SiteFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
