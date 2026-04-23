import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/use-language";
import { ES, GB } from 'country-flag-icons/react/3x2';
import logo from "@/assets/logos_blanco_transparente-02.png";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const navLinks = [
  { href: "/",         label: "nav.home" },
  { href: "/about",    label: "nav.about" },
  { href: "/team",     label: "nav.team" },
  { href: "/vehicles", label: "nav.vehicles" },
  { href: "/partners", label: "nav.partners" },
  { href: "/contact",  label: "nav.contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');
  const FlagIcon = language === 'en' ? GB : ES;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`relative sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? "bg-black/65 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40"
        : "bg-transparent border-b border-transparent"
    }`}>
      {/* Accent line at top */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transition-opacity duration-500 pointer-events-none ${scrolled ? "opacity-100" : "opacity-0"}`} />
      <div className="container flex h-[88px] sm:h-[108px] md:h-[120px] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={scrollToTop}>
          <img src={logo} alt="HeliosRace UPV Logo" className="h-[76px] sm:h-[96px] md:h-[116px] w-auto drop-shadow-[0_0_14px_rgba(234,179,8,0.18)] hover:drop-shadow-[0_0_22px_rgba(234,179,8,0.40)] transition-all duration-300" />
        </Link>

        {/* Mobile */}
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-6 w-6 text-white transition-transform duration-300 hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[260px] sm:w-[320px] bg-[#0d0f14] text-white border-l border-white/10">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => { scrollToTop(); setIsOpen(false); }}>
                    <span className={`cursor-pointer text-lg font-semibold transition-all duration-300 relative
                      ${location === link.href
                        ? "text-yellow-400"
                        : "text-white/70 hover:text-white"
                      }`}
                    >
                      {t(link.label)}
                    </span>
                  </Link>
                ))}

                {/* Join CTA */}
                <Link href="/join" onClick={() => { scrollToTop(); setIsOpen(false); }}>
                  <Button className="btn-shimmer w-full mt-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300">
                    {t('nav.join')}
                  </Button>
                </Link>

                {/* Language toggle */}
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-base font-semibold text-white/60 hover:text-white transition-all duration-300 justify-start px-0"
                >
                  <FlagIcon className="h-5 w-5" />
                  {language.toUpperCase()}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={scrollToTop}>
                  <span className={`cursor-pointer text-base font-semibold transition-all duration-300 hover:scale-105 relative
                    ${location === link.href
                      ? "text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400 after:rounded-full"
                      : "text-white/80 hover:text-white"
                    }`}
                  >
                    {t(link.label)}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Join CTA button */}
            <Link href="/join" onClick={scrollToTop}>
              <Button className="btn-shimmer bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-md shadow-yellow-500/20 px-5">
                {t('nav.join')}
              </Button>
            </Link>

            {/* Language toggle */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-all duration-300 hover:scale-105 px-2"
            >
              <FlagIcon className="h-5 w-5" />
              {language.toUpperCase()}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
