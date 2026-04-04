import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/use-language";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTopButton from "@/components/layout/scroll-to-top-button";
import Home from "@/pages/home";
import About from "@/pages/about";
import Team from "@/pages/team";
import Partners from "@/pages/partners";
import Contact from "@/pages/contact";
import Join from "@/pages/join";
import Vehicles from "@/pages/vehicles";
import Vehicle1 from "@/pages/vehicles_folder/vehicle1";
import Vehicle2 from "@/pages/vehicles_folder/vehicle2";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

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
            <Switch>
              <Route path="/"                    component={Home} />
              <Route path="/about"               component={About} />
              <Route path="/team"                component={Team} />
              <Route path="/partners"            component={Partners} />
              <Route path="/contact"             component={Contact} />
              <Route path="/join"                component={Join} />
              <Route path="/vehicles"            component={Vehicles} />
              <Route path="/vehicles/vehicle1"   component={Vehicle1} />
              <Route path="/vehicles/vehicle2"   component={Vehicle2} />
              <Route                             component={NotFound} />
            </Switch>
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
