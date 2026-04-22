import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CocheUno from "@/assets/prototipo1.jpg";
import CocheDos from "@/assets/prototipo2.png";
import { useLanguage } from "@/lib/use-language";
import PageHeader from "@/components/shared/page-header";
import DecorativeDivider from "@/components/shared/decorative-divider";

export default function Vehicles() {
  const { t, language } = useLanguage();

  const vehicles = [
    {
      title: t('vehicles.prototype1.title'),
      description: t('vehicles.prototype1.description1'),
      image: CocheUno,
      imageAlt: t('vehicles.prototype1.title') + ' - Helios Race UPV',
      imageRight: false,
    },
    {
      title: t('vehicles.prototype2.title'),
      description: t('vehicles.prototype2.description1'),
      image: CocheDos,
      imageAlt: t('vehicles.prototype2.title') + ' - Helios Race UPV',
      imageRight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      <PageHeader
        title={t('vehicles.title')}
        subtitle={language === 'en' ? 'Engineering innovation driven by solar energy.' : 'Ingeniería e innovación impulsada por energía solar.'}
        centered
      />

      <div className="container pb-24 space-y-16 sm:space-y-20">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center`}
          >
            {/* Image */}
            <div className={`relative h-[240px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden group ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500 ${vehicle.imageRight ? 'md:order-2' : ''}`}>
              <img
                src={vehicle.image}
                alt={vehicle.imageAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-3 py-1">
                  {vehicle.title}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className={vehicle.imageRight ? 'md:order-1' : ''}>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {vehicle.title}
              </h2>
              <DecorativeDivider />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-5 mb-6">
                {vehicle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            {language === 'en' ? 'Want to build the next one?' : '¿Quieres construir el siguiente?'}
          </h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Join our engineering team and contribute to the next generation of solar vehicles.'
              : 'Únete a nuestro equipo de ingeniería y contribuye a la próxima generación de vehículos solares.'}
          </p>
          <Link href="/join">
            <Button size="lg" className="btn-shimmer bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
              {t('nav.join')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
