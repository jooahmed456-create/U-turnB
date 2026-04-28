"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "من نحن", title1: "رؤية وأهداف", title2: "الحملة", subtitle: "مشروع تخرج يهدف إلى صناعة تأثير حقيقي وتغيير مسار الشباب نحو الأفضل",
    cards: [
      { id: "vision", title: "الرؤية", icon: "👁️", desc: "مجتمع يقدر العمل الحر ويعتمد عليه كمسار مهني أساسي لتحقيق الإبداع والاستقلال المالي." },
      { id: "mission", title: "الرسالة", icon: "✉️", desc: "نقدم محتوى تعليمياً وفعاليات ملهمة وموارد عملية لتمكين الشباب من اتخاذ خطوات واثقة نحو بناء مستقبل مهني مستقل وناجح." }
    ],
    goalsTitle: "أهدافنا",
    goals: [
      { text: "نشر الوعي بأهمية العمل الحر", icon: "🔍" },
      { text: "تصحيح المفاهيم الخاطئة", icon: "💡" },
      { text: "تأهيل الشباب بالمهارات المطلوبة", icon: "🛠️" },
      { text: "تعريف الشباب بالفرص العالمية", icon: "🌍" },
      { text: "دعم مسيرة مهنية ناجحة", icon: "🚀" },
      { text: "ربط الفريلانسرز ببعضهم", icon: "🤝" }
    ]
  },
  en: {
    badge: "About Us", title1: "Campaign", title2: "Vision", subtitle: "A graduation project aiming to create real impact and guide youth towards a better path",
    cards: [
      { id: "vision", title: "Vision", icon: "👁️", desc: "A society that values freelancing and relies on it as a primary career path to achieve creativity and financial independence." },
      { id: "mission", title: "Mission", icon: "✉️", desc: "Providing educational content, inspiring events, and practical resources to empower youth to take confident steps towards an independent career." }
    ],
    goalsTitle: "Our Goals",
    goals: [
      { text: "Spread awareness of freelancing", icon: "🔍" },
      { text: "Correct misconceptions", icon: "💡" },
      { text: "Equip youth with required skills", icon: "🛠️" },
      { text: "Introduce global opportunities", icon: "🌍" },
      { text: "Support successful careers", icon: "🚀" },
      { text: "Connect freelancers together", icon: "🤝" }
    ]
  }
};

export default function AboutSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">{current.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{current.title1} <span className="gradient-text">{current.title2}</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{current.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {current.cards.map((c, i) => (
            <div key={i} className="bg-[#141414] border border-[#242424] rounded-2xl p-8 hover:border-[#f97316]/50 transition-colors">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#141414] border border-[#242424] rounded-2xl p-8 hover:border-[#f97316]/50 transition-colors">
          <div className="text-center mb-8">
            <span className="text-4xl block mb-2">🎯</span>
            <h3 className="text-2xl font-bold text-white">{current.goalsTitle}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.goals.map((g, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#242424] p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">{g.icon}</span>
                <span className="text-gray-300 text-sm font-semibold">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
