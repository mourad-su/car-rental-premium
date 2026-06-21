import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { SectionHeader, fadeUp } from "./SectionHeader";

const contactItems = [
  { key: "phone", value: "+212 6 00 07 35 36", href: "tel:+212600073536", icon: FaPhone },
  { key: "email", value: "dreamcarluxee@gmail.com", href: "mailto:dreamcarluxee@gmail.com", icon: FaEnvelope },
  { key: "whatsapp", value: "+212 6 00 07 35 36", href: "https://wa.me/212600073536", icon: FaWhatsapp },
];

export function Contact({ t }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,244,194,.78),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(226,232,240,.55),transparent_24%)]" />
      <div className="site-shell relative">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card rounded-lg p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr]">
            <SectionHeader eyebrow={t.contactEyebrow} title={t.contactTitle} text={t.contactText} />
            <div className="grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.key === "whatsapp" ? "_blank" : undefined}
                    rel={item.key === "whatsapp" ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:bg-[#C9A227] hover:text-white"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#FFF7D6] text-[#A17B00] transition group-hover:bg-white group-hover:text-[#8A6800]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400 group-hover:text-white/70">{t[item.key]}</span>
                      <span className="font-black text-slate-950 group-hover:text-white">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}