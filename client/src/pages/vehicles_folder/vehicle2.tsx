import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Foto1 from "@/assets/prototipo2.png";
import Foto2 from "@/assets/prototipo2.png";
import Foto3 from "@/assets/prototipo2.png";
import { useLanguage } from "@/lib/use-language";

export default function Vehicle2() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const sections = [
    { title: t('vehicles2.prototype2.design.title'),       description: t('vehicles2.prototype2.design.description'),       image: Foto1, imageRight: true  },
    { title: t('vehicles2.prototype2.components.title'),   description: t('vehicles2.prototype2.components.description'),   image: Foto2, imageRight: false },
    { title: t('vehicles2.prototype2.achievements.title'), description: t('vehicles2.prototype2.achievements.description'), image: Foto3, imageRight: true  },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      {/* Page header */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0f14] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Button
              onClick={() => setLocation('/vehicles')}
              variant="ghost"
              className="mb-6 text-white/50 hover:text-white gap-2 px-0 hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('vehicles.back')}
            </Button>
            <h1 className="text-5xl font-black text-white mb-3 tracking-tight">
              {t('vehicles2.prototype2.title')}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-white/50 text-lg">{t('vehicles2.prototype2.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <div className="container pb-24 space-y-20">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className={`relative h-[360px] rounded-2xl overflow-hidden group ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500 ${section.imageRight ? 'md:order-2' : ''}`}>
              <img
                src={section.image}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className={section.imageRight ? 'md:order-1' : ''}>
              <h3 className="text-2xl font-black text-white mb-4 hover:text-yellow-400 transition-colors duration-300">
                {section.title}
              </h3>
              <p className="text-white/55 text-lg leading-relaxed">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
