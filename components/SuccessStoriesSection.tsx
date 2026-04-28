"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "إلهام حقيقي", title1: "قصص", title2: "نجاح", subtitle: "شباب مصري بدأوا من الصفر وحققوا استقلالهم المالي، استلهم من رحلتهم", closeBtn: "إغلاق ✕",
    stories: [
      { id: "1", name: "محمود حسن", role: "مطور واجهات أمامية", field: "برمجة", desc: "بدأ محمود بتعلم HTML و CSS عبر الإنترنت، والآن يعمل مع شركات ناشئة في أوروبا كفريلانسر.", icon: "💻" },
      { id: "2", name: "سارة أحمد", role: "مصممة جرافيك", field: "تصميم", desc: "سارة حولت شغفها بالرسم إلى تصميم الهويات البصرية، وتدير الآن عملها الخاص بالكامل.", icon: "🎨" },
      { id: "3", name: "أحمد علي", role: "كاتب محتوى", field: "كتابة", desc: "بفضل إتقانه للغات، استطاع أحمد بناء قاعدة عملاء لكتابة المقالات والترجمة التقنية.", icon: "✍️" }
    ]
  },
  en: {
    badge: "Real Inspiration", title1: "Success", title2: "Stories", subtitle: "Egyptian youth who started from scratch and achieved financial independence.", closeBtn: "Close ✕",
    stories: [
      { id: "1", name: "Mahmoud Hassan", role: "Frontend Developer", field: "Programming", desc: "Mahmoud started learning online and now works with startups in Europe as a freelancer.", icon: "💻" },
      { id: "2", name: "Sarah Ahmed", role: "Graphic Designer", field: "Design", desc: "Sarah turned her passion for drawing into visual identity design and runs her own business.", icon: "🎨" },
      { id: "3", name: "Ahmed Ali", role: "Content Writer", field: "Writing", desc: "Thanks to his language mastery, Ahmed built a client base for technical writing and translation.", icon: "✍️" }
    ]
  }
};

export default function SuccessStoriesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];
  const [activeStory, setActiveStory] = useState<any | null>(null);

  return (
    <section id="stories" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">{current.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{current.title1} <span className="gradient-text">{current.title2}</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{current.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {current.stories.map((s, i) => (
            <div key={i} onClick={() => setActiveStory(s)} className="bg-[#141414] border border-[#242424] rounded-2xl p-8 cursor-pointer hover:border-[#f97316]/50 transition-all hover:-translate-y-2">
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{s.name}</h3>
              <p className="text-[#f97316] text-sm font-bold mb-4">{s.role}</p>
              <p className="text-gray-400 text-sm line-clamp-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {activeStory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 backdrop-blur-sm" onClick={() => setActiveStory(null)}>
          <div className="bg-[#141414] border border-[#242424] rounded-2xl p-8 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveStory(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">{current.closeBtn}</button>
            <div className="text-6xl mb-6">{activeStory.icon}</div>
            <h3 className="text-2xl font-black text-white mb-1">{activeStory.name}</h3>
            <p className="text-[#f97316] font-bold mb-6">{activeStory.role}</p>
            <p className="text-gray-300 leading-relaxed text-lg">{activeStory.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
