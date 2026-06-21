import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "./SectionHeader"; 

export function Hero({ t }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 720], [0, 120]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 sm:pt-28 bg-[#FBFCFF]">
      
      {/* --- Background Section (Images) --- */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-100"
        aria-hidden="true"
      >
        {/* Noskha dyal PC: katban ghir f chachat kbar (mn md o l-f9) */}
        <img 
          src="/assets/logo_BG1.png" 
          alt="Background Logo PC" 
          className="hidden md:block w-full h-full object-cover scale-100 brightness-100 contrast-100 select-none" 
        />

        {/* Noskha dyal l-Mobile: katban ghir f chachat sghar (a9al mn md) */}
        <img 
          src="/assets/bg_tele.jpeg" 
          alt="Background Logo Mobile" 
          className="block md:hidden w-full h-full object-cover scale-100 brightness-100 contrast-100 select-none" 
        />
      </motion.div>
      
      {/* Overlays */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-transparent to-[#FBFCFF]/20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/45 to-transparent" />

<div className="site-shell relative z-10 flex min-h-[calc(100vh-80px)] items-end justify-center pb-16 sm:pb-0 sm:items-center sm:justify-start py-10 sm:py-16">
  {/* text-center f l-mobile o text-left f PC */}
  <motion.div className="max-w-4xl text-center sm:text-left mx-auto sm:mx-0" variants={fadeUp} initial="hidden" animate="visible">
    
    {/* max-w-xl o mx-auto bach y-b9a text m9ad mlli y-wli center */}
    <p className="mt-4 sm:mt-6 max-w-xl mx-auto sm:mx-0 text-base sm:text-lg font-medium leading-7 text-slate-700 drop-shadow-[0_2px_6px_rgba(255,255,255,0.95)]">
      {t?.heroSubtitle}
    </p>
    
    {/* CTA Button */}
    <a
      href="#vehicles"
      className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A227] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-950"
    >
      {t?.heroButton}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </motion.div>
</div>
    </section>
  );
}