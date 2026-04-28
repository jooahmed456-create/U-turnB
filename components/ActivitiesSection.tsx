"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "على أرض الواقع", title1: "أنشطة", title2: "الحملة", subtitle: "فعالياتنا وحملاتنا الميدانية لنشر ثقافة العمل الحر",
    activities: [
      { id: 1, title: "ندوة دراما رمضان ٢٠٢٦", desc: "مشاركة فريق U-TURN B في تنظيم ندوة استطلاع الجمهور بجامعة القاهرة.", icon: "🎤" },
      { id: 2, title: "فعاليات يوم اليتيم", desc: "مشاركة مجتمعية مميزة للفريق بالتعاون مع فريق بين نبضين التطوعي.", icon: "🤝" },
      { id: 3, title: "زيارة مستشفى بهية", desc: "مبادرة الفريق لدعم محاربات السرطان ضمن أنشطة الحملة المجتمعية.", icon: "🎗️" },
      { id: 4, title: "حملة التوعية بالجامعة", desc: "انطلاق فعاليات الحملة الميدانية داخل حرم كلية الإعلام لنشر الفكرة.", icon: "🏫" }
    ]
  },
  en: {
    badge: "On The Ground", title1: "Campaign", title2: "Activities", subtitle: "Our field events and campaigns to spread freelance culture",
    activities: [
      { id: 1, title: "Ramadan Drama Seminar", desc: "U-TURN B team co-organizing the audience poll seminar at Cairo University.", icon: "🎤" },
      { id: 2, title: "Orphan's Day", desc: "A special community participation in collaboration with Bayn Nabdayn.", icon: "🤝" },
      { id: 3, title: "Baheya Hospital Visit", desc: "An initiative to support breast cancer survivors as part of our community activities.", icon: "🎗️" },
      { id: 4, title: "Campus Awareness", desc: "Launching field activities inside the Faculty of Mass Comm campus.", icon: "🏫" }
    ]
  }
};

export default function ActivitiesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="activities" className="py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">{current.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{current.title1} <span className="gradient-text">{current.title2}</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{current.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {current.activities.map((a) => (
            <div key={a.id} className="bg-[#141414] border border-[#242424] rounded-2xl p-6 text-center hover:border-[#f97316]/50 transition-colors">
              <div className="text-5xl mb-4">{a.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
