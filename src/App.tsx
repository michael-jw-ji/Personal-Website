import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MonoSite from "./components/flight/MonoSite";
import Index from "./pages/Index";
import Career from "./pages/Career";
import Extras from "./pages/Extras";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MonoSite />}>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/extras" element={<Extras />} />
          </Route>
          {/* The redesign was reviewed under /testing; old links land on
              the same page at its real address. */}
          <Route path="/testing" element={<Navigate to="/" replace />} />
          <Route
            path="/testing/career"
            element={<Navigate to="/career" replace />}
          />
          <Route
            path="/testing/extras"
            element={<Navigate to="/extras" replace />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
