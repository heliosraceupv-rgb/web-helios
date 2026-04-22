import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Hero from "@/components/home/hero";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto5 from "@/assets/foto5.png";
import teamPhoto from "@/assets/team-photo.jpg";
import logoUPV from "@/assets/LOGOUPV.png";
import logoGE from "@/assets/LOGOGE.png";
import logoFord from "@/assets/LOGOFORD.png";
import logoPowerCo from "@/assets/LOGOPOWERCO.png";
import logoWhiteTeam from "@/assets/LOGOTHEWHITETEAM.png";
import logoMiarco from "@/assets/LOGOMIARCO.png";
import logoWurth from "@/assets/LOGOWURTH.png";
import logoSiemens from "@/assets/LOGOSIEMENS.png";
import logoPowerElectronics from "@/assets/LOGOPOWERELECTRONICS.png";
import logoGTE from "@/assets/LOGOGTE.jpeg";
import { useLanguage } from "@/lib/use-language";
import DecorativeDivider from "@/components/shared/decorative-divider";

function HomeSubtitle({ language }: { language: string }) {
  const hi = "text-yellow-300 font-semibold";
  if (language === "en") {
    return (
      <>
        Leading the way towards{" "}
        <span className={hi}>renewable energies</span> through{" "}
        <span className={hi}>innovation</span> and{" "}
        <span className={hi}>education</span>, aimed at building a clean and efficient future.
      </>
    );
  }
  return (
    <>
      Liderando el camino hacia las{" "}
      <span className={hi}>energías renovables</span> a través de la{" "}
      <span className={hi}>innovación</span> y{" "}
      <span className={hi}>educación</span>, orientadas a construir un futuro limpio y eficiente.
    </>
  );
}

const partnerLogos = [
  logoGE, logoUPV, logoPowerCo, logoWhiteTeam, logoFord,
  logoMiarco, logoSiemens, logoWurth, logoPowerElectronics, logoGTE,
];

export default function Home() {
  const { t, language } = useLanguage();

  const features = [
    { title: t('home.features.innovation.title'),     description: t('home.features.innovation.description'),     image: foto2 },
    { title: t('home.features.sustainability.title'), description: t('home.features.sustainability.description'), image: foto5 },
    { title: t('home.features.education.title'),      description: t('home.features.education.description'),      image: foto3 },
  ];

  const stats = [
    { value: "24",   label: t('home.stats.engineers') },
    { value: "2",    label: t('home.stats.prototypes') },
    { value: "3+",   label: t('home.stats.years') },
    { value: "100%", label: language === 'en' ? 'Renewable' : 'Renovable' },
  ];

  return (
    <div className="bg-[#0d0f14] text-white">

      {/* Hero */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>
      </div>

      {/* Separador diagonal */}
      <div className="relative h-16 bg-[#111318] -mt-1">
        <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full fill-[#0d0f14]">
          <polygon points="0,0 1200,0 1200,64" />
        </svg>
      </div>

      {/* Features */}
      <section className="py-20 bg-[#111318] relative">
        <div className="container mx-auto text-center max-w-5xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-yellow-400 tracking-tight -mt-6 mb-3"
          >
            {t('home.title')}
          </motion.h2>
          <div className="mb-6">
            <DecorativeDivider centered />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            <HomeSubtitle language={language} />
          </motion.p>
        </div>

        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <Card className="card-glow bg-white/5 border border-white/10 hover:border-yellow-500/35 transition-all duration-500 rounded-2xl overflow-hidden group-hover:scale-[1.03]">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0d0f14] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-black text-yellow-400 mb-2 leading-none"
                   style={{ textShadow: "0 0 40px rgba(234,179,8,0.25)" }}>
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="py-24 bg-[#111318]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[280px] sm:h-[420px] rounded-2xl overflow-hidden group ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500"
            >
              <img
                src={teamPhoto}
                alt="Helios Race Team"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-3 py-1">
                  Helios Race UPV
                </span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                {t('home.team.title')}
              </h2>
              <div className="mb-6">
                <DecorativeDivider />
              </div>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                {t('home.team.description')}
              </p>
              <Link href="/team">
                <Button size="lg" className="btn-shimmer bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
                  {t('home.team.cta')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-12 bg-[#0d0f14] border-t border-white/5 overflow-hidden">
        <div className="container mb-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-white/25">
            {t('home.partners.label')}
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0d0f14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0d0f14] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 h-10 w-32 mx-8 flex items-center justify-center">
                <img
                  src={logo}
                  alt=""
                  className="h-full w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
