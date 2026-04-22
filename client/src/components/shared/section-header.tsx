import { motion } from "framer-motion";
import DecorativeDivider from "./decorative-divider";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  titleClassName = "text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 tracking-tight",
  subtitleClassName = "text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className={titleClassName}>{title}</h2>
      <div className="mt-3 mb-5">
        <DecorativeDivider centered={centered} />
      </div>
      {subtitle && (
        <p className={`${subtitleClassName} ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
