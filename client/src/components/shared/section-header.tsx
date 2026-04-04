import { motion } from "framer-motion";

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
  titleClassName = "text-3xl md:text-4xl font-extrabold text-gray-900 mb-3",
  subtitleClassName = "text-lg text-muted-foreground max-w-2xl mx-auto px-4",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className={titleClassName}>{title}</h2>
      <div className={`flex items-center gap-2 mt-3 mb-5 ${centered ? "justify-center" : ""}`}>
        <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
        <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
        <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
      </div>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </motion.div>
  );
}
