import { motion } from "framer-motion";
import { FaChair, FaGear, FaWhatsapp } from "react-icons/fa6";
import { categoryLabels, transmissionLabels, vehicles } from "../data/vehicles";
import { formatVehiclePrice } from "../utils/pricing";
import { SectionHeader, fadeUp } from "./SectionHeader";

function VehicleCard({ vehicle, lang, t, index }) {
  const price = formatVehiclePrice(vehicle.priceUsd, lang);
  const isAr = lang === "ar";

  const whatsappNumber = "212600073536"; 
  const whatsappMessage = isAr 
    ? `السلام عليكم، أريد حجز سيارة ${vehicle.name}`
    : `Bonjour, je souhaite réserver la voiture ${vehicle.name}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-card group overflow-hidden rounded-lg bg-white border border-slate-200 flex flex-col justify-start w-full mx-auto max-w-[340px] sm:max-w-none"
    >
      <div className="relative aspect-[1.22] overflow-hidden bg-slate-100 w-full order-1">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading={index < 6 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110 relative z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-1 pointer-events-none" />
        
        <span className={`absolute top-4 rounded-full border border-white/70 bg-white/[0.85] px-3 py-1 text-xs font-black text-slate-900 backdrop-blur z-10 ${isAr ? 'right-4' : 'left-4'}`}>
          {categoryLabels[lang][vehicle.category]}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow order-2 justify-between" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className={isAr ? "text-right" : "text-left"}>
              <h3 className="text-xl font-black text-slate-950">{vehicle.name}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {t.category}: {categoryLabels[lang][vehicle.category]}
              </p>
            </div>
            <p className="shrink-0 rounded-full bg-[#ab0b0b] px-3 py-2 text-sm font-black text-white">
              {price}/{t.day}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-3 text-sm font-bold text-slate-700 justify-center">
              <FaGear className="text-[#A17B00]" />
              <span>{transmissionLabels[lang][vehicle.transmission]}</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-3 text-sm font-bold text-slate-700 justify-center">
              <FaChair className="text-[#A17B00]" />
              <span>{vehicle.seats} {t.seats}</span>
            </div>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 w-full bg-[#ff4d4d] hover:bg-[#ff6666] text-white py-3 rounded-xl font-black transition-all shadow-md active:scale-95 text-center"
        >
          <FaWhatsapp className="text-xl" />
          <span>{isAr ? "احجز الآن عبر واتساب" : "Réserver sur WhatsApp"}</span>
        </a>
      </div>
    </motion.article>
  );
}

export function CarsSection({ t, lang }) {
  const isAr = lang === "ar";

  return (
    <section id="vehicles" className="relative overflow-hidden bg-[#F7F9FC] py-24">
      <div className="absolute -top-24 left-1/2 h-64 w-[70vw] -translate-x-1/2 rounded-full bg-[#FFF4C2]/70 blur-3xl" />
      
      <div className="site-shell relative px-6 sm:px-4">
        <SectionHeader eyebrow={t.carsEyebrow} title={t.carsTitle} text={t.carsText} align="center" />
        
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          transition={{ staggerChildren: 0.045 }}
          style={{ direction: isAr ? 'rtl' : 'ltr' }}
        >
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} lang={lang} t={t} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}