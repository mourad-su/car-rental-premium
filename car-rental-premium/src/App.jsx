import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa6";
import { About } from "./components/About";
import { CarsSection } from "./components/CarsSection";
import { Contact } from "./components/Contact";
import { FloatingActions } from "./components/FloatingActions";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
// التصحيح: استيراد بـ الأقواس لأنك تستخدم Named Export
import { Header } from "./components/Header"; 
import { Hero } from "./components/Hero";
import { languages, translations } from "./data/translations";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#FBFCFF]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-[#C9A227]/35 bg-[#FFF8DF]"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaCarSide className="h-8 w-8 text-[#A17B00]" />
        </motion.div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">Dream Car</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const t = useMemo(() => translations[lang], [lang]);
  const dir = languages.find((item) => item.code === lang)?.dir ?? "ltr";

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 750);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = `${t.brand} | ${t.heroTitle}`;
  }, [dir, lang, t]);

  return (
    <div className="min-h-screen bg-[#FBFCFF] text-slate-950" dir={dir}>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="page-noise" />
      <Header t={t} lang={lang} setLang={setLang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <Hero t={t} />
          <About t={t} />
          <CarsSection t={t} lang={lang} />
          <Gallery t={t} />
          <Contact t={t} />
        </motion.main>
      </AnimatePresence>
      <FloatingActions />
      <Footer t={t} />
    </div>
  );
}