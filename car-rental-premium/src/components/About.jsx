import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function About({ t }) {
  const statsList = t && t.stats ? t.stats : [];

  const svgIcons = [
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1v-2.5a1 1 0 01.316-.725l2.764-2.304a1 1 0 01.632-.231H21a1 1 0 011 1V16a1 1 0 01-1 1h-1m-6 0h-2" /></svg>,
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" transform="rotate(45)"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
  ];

  return (
    <section id="about" className="relative bg-[#FBFCFF] py-28 overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#C9A227]/5 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="site-shell relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-[#C9A227]/25 bg-[#C9A227]/5" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 shadow-xl shadow-slate-200/50 flex items-center justify-center">
              <img src="/assets/airport.jpg" alt="Dream Car Airport Delivery" className="h-[480px] w-full rounded-xl object-contain bg-slate-50 transition duration-700 hover:scale-102" onError={(e) => { e.target.src = "/assets/camels.jpg"; }} />
            </div>
          </motion.div>
          <div className="flex flex-col justify-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A17B00]">{t?.aboutEyebrow || "Notre entreprise"}</span>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl leading-tight">{t?.aboutTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{t?.aboutText}</p>
            </motion.div>
            
            <div className="flex flex-wrap gap-6" style={{ direction: 'ltr', textAlign: 'left' }}>
              {statsList.map((stat, index) => {
                const currentIcon = svgIcons[index] || svgIcons[0];
                const firstSpace = stat ? stat.indexOf(" ") : -1;
                let titlePart = firstSpace !== -1 ? stat.substring(0, firstSpace) : stat;
                let descriptionPart = firstSpace !== -1 ? stat.substring(firstSpace + 1) : "";
                
                // Forci l-3adad dyal l-vehicules l +50
                if (index === 0) {
                  titlePart = "+50";
                  descriptionPart = "VÉHICULES";
                }

                if (index === 3) {
                  titlePart = "Livraison Gratuite";
                  descriptionPart = "Aéroport";
                  if (stat && (stat.includes("دعم") || stat.includes("توصيل") || stat.includes("المطار") || stat.includes("Support"))) {
                    titlePart = "توصيل مجاني";
                    descriptionPart = "المطار";
                  }
                }
                return (
                  <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group relative w-full sm:w-[calc(50%-12px)] overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-md hover:shadow-[#C9A227]/5">
                    <div className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-[#C9A227]/5 transition duration-300 group-hover:scale-150" />
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFBF0] text-[#C9A227] border border-[#C9A227]/10 transition duration-300 group-hover:bg-[#C9A227] group-hover:text-white group-hover:border-[#C9A227]">
                        {currentIcon}
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-950 tracking-tight leading-none">{titlePart}</p>
                        {descriptionPart && <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1.5 leading-none">{descriptionPart}</p>}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}