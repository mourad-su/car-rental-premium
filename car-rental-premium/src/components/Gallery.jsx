import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";
import { SectionHeader } from "./SectionHeader";

export function Gallery({ t }) {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="site-shell">
        <SectionHeader eyebrow={t.galleryEyebrow} title={t.galleryTitle} align="center" />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {galleryImages.map((item, index) => {
            // جلب عنصر الترجمة المقابل للصورة الحالية بناءً على الـ index
            const translation = t.gallery && t.gallery[index] ? t.gallery[index] : { title: "", desc: "" };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col gap-5"
              >
                {/* ضبط مقاسات العرض متناسقة 4/3 لجميع الصور التسعة */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl transition-all group-hover:shadow-2xl">
                  <img
                    src={item.src}
                    alt={translation.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900">{translation.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{translation.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}