import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Countdown from "./countdown";
import { useLanguage } from "@/lib/use-language";
import Foto4 from "@/assets/foto4.png";

function HeroSubtitle({ language }: { language: string }) {
  const hi = "text-yellow-300 font-semibold";
  if (language === "en") {
    return (
      <>
        Driving the next generation of{" "}
        <span className={hi}>solar-powered mobility</span> with a commitment to{" "}
        <span className={hi}>sustainable innovation</span> and cutting-edge technology.
      </>
    );
  }
  return (
    <>
      Impulsando la próxima generación de{" "}
      <span className={hi}>movilidad solar</span> con un compromiso con la{" "}
      <span className={hi}>innovación sostenible</span> y tecnología de vanguardia.
    </>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex flex-col bg-[#101217]">

      {/* Background image — desktop: right side, mobile: cover */}
      <div className="absolute inset-0 z-0">
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#101217]/80 z-10 md:hidden" />
        {/* Desktop gradient overlay */}
        <div
          className="absolute inset-0 z-10 hidden md:block"
          style={{
            background: `linear-gradient(to right,
              rgba(16,18,23,1) 5%,
              rgba(16,18,23,0.95) 25%,
              rgba(16,18,23,0.85) 50%,
              rgba(16,18,23,0.5) 75%,
              rgba(0,0,0,0) 90%)`
          }}
        />
        <img
          src={Foto4}
          alt=""
          className="w-full h-full object-cover md:object-right object-center opacity-60 md:opacity-100"
          style={{ objectPosition: "80% center" }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 z-[2] dot-grid pointer-events-none opacity-60" />

      {/* Main content */}
      <div className="container relative z-10 flex-grow flex items-center pb-24 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-white text-left"
        >
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-4 py-1.5">
              iESC 2026 · Solar Racing Challenge
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Statement line */}
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg font-semibold text-yellow-400 mb-4 tracking-wide"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base md:text-lg mb-8 text-white/60 leading-relaxed"
          >
            <HeroSubtitle language={language} />
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="btn-shimmer font-bold bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/25"
            >
              <Link href="/about">{t("hero.learnMore")}</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="font-bold border border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              <Link href="/join">{t("hero.joinTeam")}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Countdown */}
      <div className="relative z-10 mb-10 px-4 md:px-0">
        <Countdown />
      </div>
    </div>
  );
}
