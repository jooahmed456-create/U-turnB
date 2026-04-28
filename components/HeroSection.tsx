"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "حملة توعوية طلابية — كلية الإعلام، جامعة القاهرة",
    title1: "حوّل مسارك",
    title2: "نحو الحرية المهنية",
    subtitle: "نسعى إلى نشر ثقافة العمل الحر بين الشباب وتمكينهم من بناء مستقبل مهني مستقل من خلال المعرفة، الأدوات، وقصص الإلهام الحقيقية",
    cta1: "اعرف مجالك في الفريلانس 🎯",
    cta2: "تعرف علينا ←",
    stats: [ { num: "٤", label: "مجالات رئيسية" }, { num: "+١٢", label: "أداة ومنصة" }, { num: "٦", label: "قصص نجاح" } ]
  },
  en: {
    badge: "Student Awareness Campaign — Mass Comm, Cairo University",
    title1: "Turn Your Path",
    title2: "To Professional Freedom",
    subtitle: "We aim to spread freelance culture among youth and empower them to build an independent career through knowledge, tools, and real inspiration.",
    cta1: "Discover Your Field 🎯",
    cta2: "About Us ←",
    stats: [ { num: "4", label: "Main Fields" }, { num: "12+", label: "Tools & Platforms" }, { num: "6", label: "Success Stories" } ]
  }
};

export default function HeroSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="hero" className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f97316]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={ref} className="reveal">
          <span className="inline-block bg-[#141414] border border-[#f97316]/30 text-[#f97316] text-xs md:text-sm font-bold px-5 py-2 rounded-full mb-8">
            {current.badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            {current.title1} <br />
            <span className="gradient-text">{current.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            {current.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#quiz" className="w-full sm:w-auto bg-[#f97316] text-white px-8 py-4 rounded-full font-bold hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/20">
              {current.cta1}
            </a>
            <a href="#about" className="w-full sm:w-auto bg-transparent border border-[#242424] text-white px-8 py-4 rounded-full font-bold hover:border-[#f97316] hover:text-[#f97316] transition-colors">
              {current.cta2}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-[#242424] pt-10">
            {current.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-[#f97316] mb-1">{s.num}</div>
                <div className="text-gray-500 text-xs md:text-sm font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray-500">اسحب للأسفل</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#f97316] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
