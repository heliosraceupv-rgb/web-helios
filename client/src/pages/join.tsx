import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "@/lib/use-language";
import SectionHeader from "@/components/shared/section-header";
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
  };

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
              {t('join.title')}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
              {t('join.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-24 max-w-4xl">

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden ring-1 ring-white/10 mb-16"
        >
          <Slider {...settings}>
            {[logo, logo2, logo3].map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`Team ${i + 1}`}
                  className="w-full h-[420px] object-cover"
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
            style={{ width: "100%", height: "600px" }}
            data-fillout-id="bBPejs9YBKus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </motion.div>
      </div>
    </div>
  );
}
