import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/use-language";
import mision from "@/assets/trespose.jpg";
import BannerIESC from "@/assets/banner-iesc.png";
import Innovacion from "@/assets/engranaje.png";
import Teamwork from "@/assets/Teamwork.png";
import Sostenibilidad from "@/assets/leave.png";
import Compromiso from "@/assets/engranaje.png";
import BackgroundImage from "@/assets/circuito.jpg";
import VisionImage from "@/assets/vision.jpg";

export default function About() {
  const { t } = useLanguage();
  const [mapActive, setMapActive] = useState(false);

  const values = [
    { icon: Innovacion,    titleKey: "about.values.innovation",    textKey: "about.values.innovation.text" },
    { icon: Sostenibilidad, titleKey: "about.values.sustainability", textKey: "about.values.sustainability.text" },
    { icon: Teamwork,      titleKey: "about.values.teamwork",       textKey: "about.values.teamwork.text" },
    { icon: Compromiso,    titleKey: "about.values.commitment",     textKey: "about.values.commitment.text" },
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
            <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
              {t('about.title')}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
              {t("about.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-24 space-y-24">

        {/* Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-black text-white mb-6">{t("about.mission.title")}</h3>
            <p className="text-white/60 leading-relaxed text-lg">{t("about.mission.text1")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500"
          >
            <img src={mision} alt="Mission" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-yellow-500/30 transition-all duration-500 md:order-1 order-2"
          >
            <img
              src={VisionImage}
              alt="Vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-2 order-1"
          >
            <h3 className="text-3xl font-black text-white mb-6">{t("about.vision.title")}</h3>
            <p className="text-white/60 leading-relaxed text-lg">{t("about.vision.text")}</p>
          </motion.div>
        </div>

        {/* Valores */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-3xl font-black text-white mb-3">{t("about.values.title")}</h3>
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 hover:border-yellow-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.06)]"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <img src={v.icon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{t(v.titleKey)}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{t(v.textKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      </div>

      {/* Competición */}
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f14] via-transparent to-[#0d0f14]" />
        <div className="relative z-10 container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-4 text-center">
              {t("about.competition.title")}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src={BannerIESC} alt="iLumen European Solar Challenge" className="w-full h-auto" />
              </div>
              <p className="text-white/60 leading-relaxed">{t("about.competition.text")}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mapa */}
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-black text-white mb-3 text-center">
            {t("about.findUs.title")} <span className="text-yellow-400">aquí</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
            <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
            <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
          </div>
          <div
            className="relative w-full h-[400px] rounded-2xl overflow-hidden ring-1 ring-white/10 cursor-pointer"
            onClick={() => setMapActive(true)}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.8761401873059!2d-0.3423264303337206!3d39.48051999822536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049006994a535%3A0xc6ff399231179898!2sHelios%20Race%20UPV!5e0!3m2!1ses!2ses!4v1739906135629!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {!mapActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300">
                <div className="flex items-center gap-2 bg-black/60 border border-white/15 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                  </svg>
                  Click para interactuar
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
