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
import PageHeader from "@/components/shared/page-header";
import DecorativeDivider from "@/components/shared/decorative-divider";

export default function Partners() {
  const { t, language } = useLanguage();

  const mainPartners = [
    { image: logoGE,        url: "https://generacionespontanea.upv.es", name: "GE / Generación Espontánea" },
    { image: logoUPV,       url: "https://www.upv.es",                  name: "Universitat Politècnica de València" },
    { image: logoPowerCo,   url: "https://www.powerco.es",              name: "PowerCo" },
    { image: logoWhiteTeam, url: "https://www.twtspain.com",            name: "The White Team" },
    { image: logoFord,      url: "https://www.ford.com",                name: "Ford" },
    { image: logoMiarco,    url: "https://www.miarco.com",              name: "Miarco" },
  ];

  const supportPartners = [
    { image: logoSiemens,          url: "https://www.siemens.com",           name: "Siemens" },
    { image: logoWurth,            url: "https://www.we-online.com",         name: "Würth Elektronik" },
    { image: logoPowerElectronics, url: "https://www.power-electronics.com", name: "Power Electronics" },
    { image: logoGTE,              url: "https://www.gtecomposites.com",     name: "GTE Composites" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      <PageHeader
        title={t('partners.title')}
        subtitle={t('partners.subtitle')}
        centered
      />

      <div className="container pb-24">

        {/* Partners principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-lg font-bold tracking-widest uppercase text-yellow-500/70 text-center mb-6">
            {language === 'en' ? 'Main Partners' : 'Patrocinadores Principales'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {mainPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="group flex items-center justify-center bg-white rounded-2xl p-4 sm:p-6 h-28 sm:h-36 border border-white/10 hover:border-yellow-500/40 hover:shadow-[0_0_24px_rgba(234,179,8,0.15)] transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Partners de apoyo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-lg font-bold tracking-widest uppercase text-yellow-500/70 text-center mb-6">
            {language === 'en' ? 'Supporting Partners' : 'Partners de Apoyo'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {supportPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="group flex items-center justify-center bg-white rounded-2xl p-3 sm:p-4 h-20 sm:h-24 border border-white/10 hover:border-yellow-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)] transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10"
        >
          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
            {t('partners.becomePartner.title')}
          </h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            {t('partners.becomePartner.text')}
          </p>
          <Button asChild size="lg" className="btn-shimmer bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
            <Link href="/contact">{t('partners.becomePartner.title')}</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
