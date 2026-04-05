import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/use-language";

import imgDireccion    from "@/assets/team-icons/direccion.png";
import imgEstructura   from "@/assets/team-icons/estructura.png";
import imgMecanica     from "@/assets/team-icons/mecanica.png";
import imgBateria      from "@/assets/team-icons/bateria.png";
import imgFotovoltaica from "@/assets/team-icons/fotovoltaica.png";
import imgTelemetria   from "@/assets/team-icons/telemetria.png";
import imgMotor        from "@/assets/team-icons/motor.png";
import imgIluminacion  from "@/assets/team-icons/iluminacion.png";
import imgMarketing    from "@/assets/team-icons/marketing.png";
import imgPartners     from "@/assets/team-icons/partners.png";
import imgElectronica  from "@/assets/team-icons/electronica.png";
import imgPlaceholder   from "@/assets/logo.png";

const placeholder = imgPlaceholder;

const team2224 = [
  {
    id: "direccion-2224",
    label: "Dirección",
    labelKey: "team.dept.direccion",
    iconImg: imgDireccion,
    members: [
      { name: "Augusto Lucioni", role: "Project Manager", linkedin: "https://www.linkedin.com/in/augustolucioni/", image: placeholder },
    ],
  },
  {
    id: "mecanica-2224",
    label: "Mecánica",
    labelKey: "team.dept.mecanica",
    iconImg: imgMecanica,
    members: [
      { name: "Javier Fernandez Sanmartín", role: "Head of Mechanics",   linkedin: "https://www.linkedin.com/in/francisco-javier-fernandez-sanmart%C3%ADn-273a5724b/", image: placeholder },
      { name: "Raül Ferrando Navarro",       role: "Mechanical Engineer", linkedin: "https://www.linkedin.com/in/ra%C3%BCl-ferrando-navarro-6ba257332/",               image: placeholder },
      { name: "Jorge Rubio Valdés",          role: "Mechanical Engineer", linkedin: "https://www.linkedin.com/in/jorge-rubio-vald%C3%A9s/",                           image: placeholder },
      { name: "Ivan Bono Pales",             role: "Mechanical Engineer", linkedin: "https://www.linkedin.com/in/ivan-bono-pales-105405355/",                          image: placeholder },
    ],
  },
  {
    id: "estructura-2224",
    label: "Estructura",
    labelKey: "team.dept.estructura",
    iconImg: imgEstructura,
    members: [
      { name: "Adrián García Rodrigo", role: "Structure Engineer", linkedin: "https://www.linkedin.com/in/adri%C3%A1n-garc%C3%ADa-rodrigo-b45954164/", image: placeholder },
    ],
  },
  {
    id: "electronica-2224",
    label: "Electrónica",
    labelKey: "team.dept.electronica",
    iconImg: imgElectronica,
    members: [
      { name: "Antonio Melero Calvete",  role: "Head of Electronics",  linkedin: "https://www.linkedin.com/in/antonio-melero-calvete-b91ab6252/", image: placeholder },
      { name: "Alejandro Espí Cambra",   role: "Electronics Engineer", linkedin: "https://www.linkedin.com/in/alejandro-espi-cambra/",            image: placeholder },
      { name: "Ruben Verdeguer Asensio", role: "Electronics Engineer", linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/",          image: placeholder },
    ],
  },
  {
    id: "baterias-2224",
    label: "Baterías",
    labelKey: "team.dept.baterias",
    iconImg: imgBateria,
    members: [
      { name: "Saul Ferrer Zaragoza", role: "Battery & Photovoltaic Engineer", linkedin: "https://www.linkedin.com/in/saul-ferrer-zaragoza-602b96230/", image: placeholder },
      { name: "Carles Bataller",       role: "Battery Engineer",               linkedin: "https://www.linkedin.com/in/carles-bataller-475295129/",       image: placeholder },
      { name: "Augusto Lucioni",       role: "Battery Engineer",               linkedin: "https://www.linkedin.com/in/augustolucioni/",                  image: placeholder },
    ],
  },
];

const team2426 = [
  {
    id: "direccion-2426",
    label: "Dirección",
    labelKey: "team.dept.direccion",
    iconImg: imgDireccion,
    members: [
      { name: "Ruben Verdeguer Asensio", role: "Team Lead / Technical Director", linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/", image: placeholder },
    ],
  },
  {
    id: "estructura-2426",
    label: "Estructura",
    labelKey: "team.dept.estructura",
    iconImg: imgEstructura,
    members: [
      { name: "Rafael Navarro Navarro", role: "Head of Structure",  linkedin: "https://www.linkedin.com/in/rafael-navarro-navarro-2b6705365/", image: placeholder },
      { name: "Joan Seresola Vicens",   role: "Structure Engineer", linkedin: "https://www.linkedin.com/in/joan-seresola-vicens/",             image: placeholder },
      { name: "Marcos Hernández Folgado", role: "Structure Engineer", linkedin: "https://www.linkedin.com/in/marcos-hern%C3%A1ndez-folgado-0a4696391/", image: placeholder },
      { name: "Tomás Olivier Giniger",  role: "Structure Engineer", linkedin: "https://www.linkedin.com/in/tom%C3%A1s-olivier-giniger-2373a034b/", image: placeholder },
    ],
  },
  {
    id: "mecanica-2426",
    label: "Mecánica",
    labelKey: "team.dept.mecanica",
    iconImg: imgMecanica,
    members: [
      { name: "Sandra Bermejo Calvo",  role: "Head of Mechanics",  linkedin: "https://www.linkedin.com/in/sandra-bermejo-calvo-491ab12a2/", image: placeholder },
      { name: "Rafael Rodríguez",      role: "Mechanical Engineer", linkedin: "#",                                                           image: placeholder },
      { name: "Jorge Rubio Valdés",    role: "Mechanical Engineer", linkedin: "https://www.linkedin.com/in/jorge-rubio-valdes/",             image: placeholder },
      { name: "Pedro Galindo Inostroza", role: "Mechanical Engineer", linkedin: "https://www.linkedin.com/in/pedro-galindo-inostroza-9628a0201/", image: placeholder },
    ],
  },
  {
    id: "baterias-2426",
    label: "Baterías",
    labelKey: "team.dept.baterias",
    iconImg: imgBateria,
    members: [
      { name: "Ruben Verdeguer Asensio", role: "Head of Batteries",  linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/",        image: placeholder },
      { name: "Miguel Ferrer Far",       role: "Battery Engineer",   linkedin: "https://www.linkedin.com/in/miguel-ferrer-far-b34547364/",    image: placeholder },
      { name: "Alejandro Costa Cuevas", role: "Battery Engineer",   linkedin: "https://www.linkedin.com/in/alejandro-costa-cuevas-478720204/", image: placeholder },
      { name: "Ismael Hamad Valdez",    role: "Battery Engineer",   linkedin: "https://www.linkedin.com/in/ismael-hamad-valdez-06445b343/",   image: placeholder },
    ],
  },
  {
    id: "fotovoltaica-2426",
    label: "Fotovoltaica",
    labelKey: "team.dept.fotovoltaica",
    iconImg: imgFotovoltaica,
    members: [
      { name: "Taylor Rodríguez Cuéllar", role: "Head of Photovoltaic", linkedin: "https://www.linkedin.com/in/taylor-rodr%C3%ADguez-cuellar-b186ab277/", image: placeholder },
    ],
  },
  {
    id: "telemetria-2426",
    label: "Telemetría",
    labelKey: "team.dept.telemetria",
    iconImg: imgTelemetria,
    members: [
      { name: "Elias Ennif Yahyaoui",       role: "Head of Telemetry",    linkedin: "https://www.linkedin.com/in/elias-ennif-yahyaoui-528387322/",   image: placeholder },
      { name: "Ismael Mustafa Mouadeb",     role: "Telemetry Engineer",   linkedin: "https://linkedin.com/in/ismael-mustafa-mouadeb-b9b0b4328",      image: placeholder },
      { name: "Hernán Basaurit Marín",      role: "Telemetry Engineer",   linkedin: "https://www.linkedin.com/in/hern%C3%A1n-basaurit-mar%C3%ADn-06186338b/", image: placeholder },
    ],
  },
  {
    id: "motor-2426",
    label: "Motor",
    labelKey: "team.dept.motor",
    iconImg: imgMotor,
    members: [
      { name: "Carla García", role: "Head of Motor", linkedin: "#", image: placeholder },
    ],
  },
  {
    id: "iluminacion-2426",
    label: "Iluminación",
    labelKey: "team.dept.iluminacion",
    iconImg: imgIluminacion,
    members: [
      { name: "Ruben Verdeguer Asensio", role: "Head of Lighting", linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/", image: placeholder },
    ],
  },
  {
    id: "marketing-2426",
    label: "Marketing y Diseño",
    labelKey: "team.dept.marketing",
    iconImg: imgMarketing,
    members: [
      { name: "Andrea Gallego de Miguel", role: "Head of Marketing & Design", linkedin: "https://www.linkedin.com/in/andrea-gallego-de-miguel-4342b7364/", image: placeholder },
      { name: "Sofía Santiago",           role: "Marketing & Design",         linkedin: "#", image: placeholder },
      { name: "Santiago",                 role: "Marketing & Design",         linkedin: "#", image: placeholder },
      { name: "Toni",                     role: "Marketing & Design",         linkedin: "#", image: placeholder },
      { name: "Carla García",                    role: "Marketing & Design",         linkedin: "#", image: placeholder },
    ],
  },
  {
    id: "partners-2426",
    label: "Partners y Finanzas",
    labelKey: "team.dept.partners",
    iconImg: imgPartners,
    members: [
      { name: "Ruben Verdeguer Asensio", role: "Partners & Finance", linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/", image: placeholder },
    ],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Team() {
  const { t } = useLanguage();
  const [activeTeam, setActiveTeam] = useState<"2224" | "2426">("2224");

  const subsystems = activeTeam === "2224" ? team2224 : team2426;
  const visibleSubs = subsystems.filter(s => s.members.length > 0);

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white">

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
              {t('team.title')}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('team.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-16">

        {/* Season toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-14"
        >
          <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1 gap-1">
            {(["2224", "2426"] as const).map((season) => (
              <button
                key={season}
                onClick={() => setActiveTeam(season)}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeTeam === season
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {season === "2224" ? "2022 — 2024" : "2024 — 2026"}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Dept nav */}
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500/70 mb-2">
                {t('team.season')} {activeTeam === "2224" ? "2022 — 2024" : "2024 — 2026"}
              </p>
              <h2 className="text-3xl font-black tracking-widest text-white uppercase mb-10">
                {t('team.departments').toUpperCase()}
              </h2>

              <div className="flex flex-wrap justify-center gap-8">
                {subsystems.map((sub, i) => {
                  const Icon = (sub as any).icon;
                  const iconImg = (sub as any).iconImg;
                  return (
                    <motion.button
                      key={sub.id}
                      onClick={() => scrollToSection(sub.id)}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                      className="group flex flex-col items-center gap-3 cursor-pointer"
                    >
                      <div className="w-36 h-36 rounded-2xl flex items-center justify-center bg-white/5 border border-white/15 group-hover:border-yellow-500/60 group-hover:bg-yellow-500/10 transition-all duration-300">
                        {iconImg ? (
                          <img
                            src={iconImg}
                            alt={(sub as any).labelKey ? t((sub as any).labelKey) : sub.label}
                            className="w-20 h-20 object-contain mix-blend-screen [filter:invert(1)_opacity(0.55)] group-hover:[filter:invert(1)_sepia(1)_saturate(8)_hue-rotate(5deg)] transition-all duration-300"
                          />
                        ) : (
                          <Icon className="w-16 h-16 text-white/60 group-hover:text-yellow-400 transition-colors duration-300" />
                        )}
                      </div>
                      <span className="text-sm text-white/50 group-hover:text-yellow-400 transition-colors duration-300 tracking-wide text-center max-w-[100px]">
                        {(sub as any).labelKey ? t((sub as any).labelKey) : sub.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 mb-20" />

            {/* Dept sections */}
            {visibleSubs.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-white/30 text-lg">{t('team.comingSoon')}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-24">
                {visibleSubs.map((sub, sIdx, arr) => {
                  const Icon = (sub as any).icon;
                  const iconImg = (sub as any).iconImg;
                  return (
                    <motion.section
                      key={sub.id}
                      id={sub.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6 }}
                      className="scroll-mt-24"
                    >
                      <div className="flex flex-col items-center mb-12">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-yellow-500/10 border border-yellow-500/40 mb-4">
                          {iconImg ? (
                            <img
                              src={iconImg}
                              alt={(sub as any).labelKey ? t((sub as any).labelKey) : sub.label}
                              className="w-12 h-12 object-contain mix-blend-screen [filter:invert(1)_sepia(1)_saturate(8)_hue-rotate(5deg)]"
                            />
                          ) : (
                            <Icon className="w-10 h-10 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-1">{t('team.department')}</p>
                        <h2 className="text-3xl font-black text-white tracking-tight">{(sub as any).labelKey ? t((sub as any).labelKey) : sub.label}</h2>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="h-[2px] w-8 rounded-full bg-yellow-500" />
                          <div className="h-[2px] w-4 rounded-full bg-yellow-500/50" />
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-8">
                        {sub.members.map((member, mIdx) => (
                          <motion.div
                            key={mIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: mIdx * 0.08 }}
                          >
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col items-center gap-3 w-40"
                            >
                              <div className="relative w-28 h-28 rounded-full ring-2 ring-white/10 group-hover:ring-yellow-500/50 transition-all duration-300 overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  loading="lazy"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                                  {member.name}
                                </p>
                                <p className="text-xs text-white/50 mt-1">{member.role}</p>
                              </div>
                            </a>
                          </motion.div>
                        ))}
                      </div>

                      {sIdx < arr.length - 1 && (
                        <div className="border-t border-white/5 mt-20" />
                      )}
                    </motion.section>
                  );
                })}
              </div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 text-center text-white/40 max-w-2xl mx-auto text-base leading-relaxed"
            >
              {t('team.description')}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
