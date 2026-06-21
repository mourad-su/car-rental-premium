import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[#A17B00]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>}
    </motion.div>
  );
}
