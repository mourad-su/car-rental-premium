import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { languages } from "../data/translations";

const anchors = ["home", "about", "vehicles", "gallery", "contact"];
const defaultNav = ["Accueil", "A propos", "Vehicules", "Galerie", "Contact"];

export function Header({ t, lang, setLang, menuOpen, setMenuOpen }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const activeLanguage = languages.find((item) => item.code === lang) ?? languages[0];
  
  const selectLanguage = (code) => {
    setLang(code);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  const getFlagUrl = (flagCode) => {
    return `https://flagcdn.com/w40/${flagCode.toLowerCase()}.png`;
  };

  const menuItems = t?.nav || defaultNav;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/[0.88] shadow-sm backdrop-blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="site-shell flex h-20 items-center justify-between gap-4 px-4">

        <a href="#home" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt={t?.brand || "Dream Car"} className="h-22 w-auto object-contain" />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-8">
          {menuItems.map((item, index) => (
            <a key={item} href={`#${anchors[index]}`} className="text-sm font-semibold text-slate-600 hover:text-[#A17B00]">
              {item}
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-3">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm"
          >
            <img src={getFlagUrl(activeLanguage.flag)} className="h-4 w-6 object-cover rounded-sm" />
            {activeLanguage.shortLabel}
            <FiChevronDown />
          </button>
          
          <AnimatePresence>
            {languageOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ 
                  position: 'absolute',
                  top: '100%',
                  left: lang === 'ar' ? '0' : 'auto',
                  right: lang === 'ar' ? 'auto' : '0',
                  marginTop: '8px',
                  width: '170px',
                  direction: 'ltr',
                  zIndex: 9999
                }}
                className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-2xl"
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => selectLanguage(item.code)}
                    className="flex w-full items-center justify-between px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={getFlagUrl(item.flag)} className="h-4 w-6 object-cover rounded-sm" />
                      <span className="font-semibold text-sm text-slate-800">{item.label}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-bold">{item.shortLabel}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button className="lg:hidden p-2 text-slate-800 hover:bg-slate-50 rounded-lg transition" onClick={() => setMenuOpen(true)}>
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] h-screen w-screen bg-white px-6 py-5 lg:hidden flex flex-col justify-between"
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          >
            <div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-5">
                <img src="/assets/logo.png" alt="Dream Car" className="h-10 w-auto object-contain" />
                <button 
                  onClick={() => setMenuOpen(false)} 
                  className="p-2 rounded-full bg-slate-50 text-slate-800 hover:bg-slate-100 transition"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 mt-8">
                {menuItems.map((item, index) => (
                  <a 
                    key={item} 
                    href={`#${anchors[index]}`} 
                    onClick={() => setMenuOpen(false)} 
                    className="block rounded-xl py-4 px-5 text-lg font-bold text-slate-800 bg-slate-50/80 hover:bg-[#A17B00]/10 hover:text-[#A17B00] transition duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="text-center text-xs font-semibold text-slate-400 pb-4">
              © 2026 Dream Car. Premium Rental.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}