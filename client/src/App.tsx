import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/use-language";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTopButton from "@/components/layout/scroll-to-top-button";

// Lazy-loaded pages — mejora el tiempo de carga inicial
const Home     = lazy(() => import("@/pages/home"));
const About    = lazy(() => import("@/pages/about"));
const Team     = lazy(() => import("@/pages/team"));
const Partners = lazy(() => import("@/pages/partners"));
const Contact  = lazy(() => import("@/pages/contact"));
const Join     = lazy(() => import("@/pages/join"));
const Vehicles = lazy(() => import("@/pages/vehicles"));
const Vehicle1 = lazy(() => import("@/pages/vehicles_folder/vehicle1"));
const Vehicle2 = lazy(() => import("@/pages/vehicles_folder/vehicle2"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f14]">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/"                   component={Home} />
              <Route path="/about"              component={About} />
              <Route path="/team"               component={Team} />
              <Route path="/partners"           component={Partners} />
              <Route path="/contact"            component={Contact} />
              <Route path="/join"               component={Join} />
              <Route path="/vehicles"           component={Vehicles} />
              <Route path="/vehicles/vehicle1"  component={Vehicle1} />
              <Route path="/vehicles/vehicle2"  component={Vehicle2} />
              <Route                            component={NotFound} />
            </Switch>
          </Suspense>
        </motion.div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
