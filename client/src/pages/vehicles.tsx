import { motion } from "framer-motion";
import CocheUno from "@/assets/prototipo1.jpg";
import CocheDos from "@/assets/prototipo2.png";
import { useLanguage } from "@/lib/use-language";

export default function Vehicles() {
  const { t } = useLanguage();

  const vehicles = [
    {
      title: t('vehicles.prototype1.title'),
      description: t('vehicles.prototype1.description1'),
      image: CocheUno,
      imageRight: false,
    },
    {
      title: t('vehicles.prototype2.title'),
      description: t('vehicles.prototype2.description1'),
      image: CocheDos,
      imageRight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      {/* Page header */}
      <div className="relative overflow-hidden py-20 bg-[#0d0f14]">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0f14] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
              {t('vehicles.title')}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vehicles */}
      <div className="container pb-24 space-y-20">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${vehicle.imageRight ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            {/* Image */}
            <div className={`relative h-[380px] rounded-2xl overflow-hidden group ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500 ${vehicle.imageRight ? 'md:order-2' : ''}`}>
              <img
                src={vehicle.image}
                alt={vehicle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Text */}
            <div className={vehicle.imageRight ? 'md:order-1' : ''}>
              <h3 className="text-3xl font-black text-white mb-4 hover:text-yellow-400 transition-colors duration-300">
                {vehicle.title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {vehicle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
