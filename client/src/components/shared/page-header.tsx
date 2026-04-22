import { motion } from "framer-motion";
import DecorativeDivider from "./decorative-divider";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function PageHeader({ title, subtitle, centered = false }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0f14] pointer-events-none" />
      <div className={`container relative z-10 ${centered ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {title}
          </h1>
          <div className="mb-6">
            <DecorativeDivider centered={centered} />
          </div>
          {subtitle && (
            <p className={`text-white/60 text-base sm:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
