import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

export default function Partners() {
  const { t } = useLanguage();

  const mainPartners = [
    { image: logoGE,         url: "https://generacionespontanea.upv.es" },
    { image: logoUPV,        url: "https://www.upv.es" },
    { image: logoPowerCo,    url: "https://www.powerco.es" },
    { image: logoWhiteTeam,  url: "https://www.twtspain.com" },
    { image: logoFord,       url: "https://www.ford.com" },
    { image: logoMiarco,     url: "https://www.miarco.com" },
  ];

  const supportPartners = [
    { image: logoSiemens,          url: "https://www.siemens.com" },
    { image: logoWurth,            url: "https://www.we-online.com" },
    { image: logoPowerElectronics, url: "https://www.power-electronics.com" },
    { image: logoGTE,              url: "https://www.gtecomposites.com" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      {/* Page header */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0f14] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
              {t('partners.title')}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
              {t('partners.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-24">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/5 border border-white/10 rounded-2xl p-10"
        >
          <h3 className="text-2xl font-black text-white mb-3">
            {t('partners.becomePartner.title')}
          </h3>
          <p className="text-white/50 mb-6 max-w-2xl mx-auto leading-relaxed">
            {t('partners.becomePartner.text')}
          </p>
          <Button asChild size="lg" className="btn-shimmer bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
            <Link href="/contact">{t('partners.becomePartner.title')}</Link>
          </Button>
        </motion.div>

        {/* Tier principal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {mainPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-white rounded-2xl p-6 h-36 border border-white/10 hover:border-yellow-500/40 hover:shadow-[0_0_24px_rgba(234,179,8,0.12)] transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.image}
                  className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tier secundario */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {supportPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-white rounded-2xl p-4 h-24 border border-white/10 hover:border-yellow-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.10)] transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.image}
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
