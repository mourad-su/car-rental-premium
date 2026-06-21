import { motion } from "framer-motion";
// 1. هنا زدنا استوردنا FaPhone اللي كتعطي شكل تيليفون
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa6"; 

const actions = [
  { label: "WhatsApp", icon: FaWhatsapp ,  href: "https://wa.me/212600073536" },
  
  { label: "Phone", icon: FaPhone, href: "tel:+212600073536" }, 
  
  { label: "Gmail", icon: FaEnvelope, href: "mailto:dreamcar@gmail.com" },
];

export function FloatingActions() {
  return (
    <motion.div
      className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3 sm:right-4"
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {actions.map((action) => {
        const Icon = action.icon;
        
        const isDirectAction = action.label === "Gmail" || action.label === "Phone";

        return (
          <a
            key={action.label}
            href={action.href}
            target={isDirectAction ? undefined : "_blank"}
            rel={isDirectAction ? undefined : "noreferrer"}
            aria-label={action.label}
            className="group grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/[0.90] text-slate-800 shadow-2xl shadow-slate-300/60 backdrop-blur-xl transition duration-300 hover:-translate-x-1 hover:scale-110 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </motion.div>
  );
}