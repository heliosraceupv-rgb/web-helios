import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "@/lib/use-language";
import PageHeader from "@/components/shared/page-header";
import logo from "@/assets/enseñarniño.jpg";
import logo2 from "@/assets/trespose.jpg";
import logo3 from "@/assets/logo_blue.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Join() {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      <PageHeader title={t('join.title')} subtitle={t('join.subtitle')} centered />

      <div className="container pb-24 max-w-4xl">

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden ring-1 ring-white/10 mb-12"
        >
          <Slider {...settings}>
            {[logo, logo2, logo3].map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`Helios Race UPV equipo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[200px] sm:h-[320px] md:h-[420px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Fillout form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div
            style={{ width: "100%", height: "clamp(420px, 80vh, 700px)" }}
            data-fillout-id="bBPejs9YBKus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
          <noscript>
            <div className="p-8 text-center text-white/60">
              <p>Por favor habilita JavaScript para ver el formulario de inscripción.</p>
              <a href="mailto:heliosraceupv@gmail.com" className="text-yellow-400 underline mt-2 inline-block">
                O envíanos un email directamente
              </a>
            </div>
          </noscript>
        </motion.div>
      </div>
    </div>
  );
}
