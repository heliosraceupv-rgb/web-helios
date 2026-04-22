import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { Link } from "wouter";
import logo from "@/assets/logos_blanco_transparente-02.png";

const navColumns = [
  {
    title: "Equipo",
    links: [
      { href: "/about",    label: "Sobre nosotros" },
      { href: "/team",     label: "El equipo" },
      { href: "/vehicles", label: "Vehículos" },
    ],
  },
  {
    title: "Conecta",
    links: [
      { href: "/partners", label: "Partners" },
      { href: "/contact",  label: "Contacto" },
      { href: "/join",     label: "Únete" },
    ],
  },
];

const socials = [
  { href: "https://www.instagram.com/heliosraceupv/?hl=es",                        Icon: SiInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/heliosraceupv/posts/?feedView=all",    Icon: SiLinkedin,  label: "LinkedIn" },
  { href: "https://www.youtube.com/@HeliosRaceUPV",                                Icon: SiYoutube,   label: "YouTube" },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] border-t border-white/5 text-white">
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" onClick={scrollToTop}>
              <img src={logo} alt="Helios Race UPV" className="h-14 w-auto mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              El equipo de carreras solares de la Universitat Politècnica de València, impulsando la movilidad sostenible del futuro.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 hover:scale-110 text-white/60"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold tracking-widest uppercase text-yellow-500 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={scrollToTop}>
                      <span className="text-white/45 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} Helios Race UPV · Todos los derechos reservados.</span>
          <a
            href="https://maps.app.goo.gl/zjmDprXPrq7MXDPaA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            📍 Camí de Vera, s/n, Edificio 4H, UPV
          </a>
          <a
            href="mailto:heliosraceupv@gmail.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            ✉️ heliosraceupv@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
