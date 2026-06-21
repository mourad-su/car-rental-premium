import { FaCarSide, FaEnvelope, FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const anchors = ["home", "about", "vehicles", "gallery", "contact"];

export function Footer({ t }) {
  const menuItems = t?.nav || ["Accueil", "A propos", "Vehicules", "Galerie", "Contact"];

  return (
    <footer className="border-t border-slate-200/60 bg-slate-50/50 text-slate-600 py-16">
      <div className="site-shell mx-auto max-w-7xl px-4 grid grid-cols-1 gap-10 md:grid-cols-3 sm:px-6 lg:gap-16">
        
        {/* Section 1: Logo, Description & Social Media */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt={t?.brand || "Dream Car"} className="h-12 w-auto object-contain" />
            <span className="text-xl font-black text-slate-900 tracking-wide uppercase">{t?.brand || "Dream Car"}</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-500 font-medium">
            {t?.footerText || "Flotte d'exception, service sur mesure et transparence totale pour tous vos trajets."}
          </p>
          
          {/* الأيقونات الإجتماعية بألوانها الرسمية الثابتة */}
          <div className="flex items-center gap-3 mt-2">
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="grid h-9 w-9 place-items-center rounded-xl bg-[#1877F2] text-white shadow-sm hover:opacity-85 hover:scale-105 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm hover:opacity-85 hover:scale-105 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@404mi__nd" 
              target="_blank" 
              rel="noreferrer" 
              className="grid h-9 w-9 place-items-center rounded-xl bg-[#000000] text-white shadow-sm hover:opacity-85 hover:scale-105 transition duration-300"
              aria-label="TikTok"
            >
              <FaTiktok className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Section 2: Menu Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 max-w-[80px]">
            Menu
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-semibold">
            {menuItems.map((item, index) => (
              <li key={item}>
                <a 
                  href={`#${anchors[index]}`} 
                  className="transition duration-200 text-slate-600 hover:text-[#A17B00] flex items-center gap-2 hover:translate-x-1 transform"
                >
                  <span className="text-[#C9A227] text-xs">✦</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 max-w-[100px]">
            Contact
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-semibold text-slate-600">
            <li>
              <a href="tel:+212600073536" className="flex items-center gap-3 hover:text-[#A17B00] transition group">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white border border-slate-200 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white group-hover:border-[#C9A227] transition duration-300 shadow-sm">
                  <FaPhone className="h-4 w-4" />
                </span>
                <span>+212 600-073536</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/212600073536" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#128C7E] transition group">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[white] border border-slate-200 text-[#C9A227] group-hover:bg-[#128C7E] group-hover:text-white group-hover:border-[#128C7E] transition duration-300 shadow-sm">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <span>WhatsApp Support</span>
              </a>
            </li>
            <li>
              <a href="mailto:dreamcar@gmail.com" className="flex items-center gap-3 hover:text-[#A17B00] transition group">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white border border-slate-200 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white group-hover:border-[#C9A227] transition duration-300 shadow-sm">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <span className="break-all">dreamcar@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Footer Sub-bar */}
      <div className="site-shell mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-slate-200/60 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
        <p>&copy; 2026 {t?.brand || "Dream Car"}. {t?.rights || "Tous droits réservés."}</p>
        <div className="flex gap-4">
          <span className="text-slate-400/80">Premium Rental Experience</span>
        </div>
      </div>
    </footer>
  );
}