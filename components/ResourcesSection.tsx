"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

// 💡 قاموس اللغات الشامل للمصادر والأدوات
const dictionary = {
  ar: {
    badge: "ابدأ رحلتك",
    title1: "مصادر",
    title2: "التعلم",
    subtitle: "منصات وأدوات مختارة بعناية لكل مجال لمساعدتك على الاحتراف",
    freeBadge: "مجاني",
    visitBtn: "زيارة المصدر ←",
    tabs: [
      { id: "all", label: "الكل" },
      { id: "marketplace", label: "منصات العمل" },
      { id: "platform", label: "التعلم" },
      { id: "tool", label: "أدوات" },
    ],
    resources: [
      { title: "مستقل", en: "Mostaql", url: "https://mostaql.com", cat: "marketplace", free: true, icon: "🛒", desc: "أكبر منصة للعمل الحر في العالم العربي للوصول لعملاء محليين." },
      { title: "خمسات", en: "Khamsat", url: "https://khamsat.com", cat: "marketplace", free: true, icon: "💼", desc: "منصة عربية رائدة لبيع وشراء الخدمات المصغرة بأسعار تبدأ من 5$." },
      { title: "Upwork", en: "Upwork", url: "https://upwork.com", cat: "marketplace", free: true, icon: "🌍", desc: "منصة فريلانسر عالمية تفتح لك آفاق العمل مع عملاء دوليين." },
      { title: "Fiverr", en: "Fiverr", url: "https://fiverr.com", cat: "marketplace", free: true, icon: "🚀", desc: "سوق دولي ضخم لتقديم خدماتك الإبداعية والتقنية للعالم." },
      { title: "Coursera", en: "Coursera", url: "https://coursera.org", cat: "platform", free: false, icon: "🎓", desc: "كورسات احترافية وشهادات معتمدة من أفضل الجامعات العالمية." },
      { title: "Udemy", en: "Udemy", url: "https://udemy.com", cat: "platform", free: false, icon: "📚", desc: "دورات عملية تطبيقية بمختلف اللغات لتطوير مهاراتك بسرعة." },
      { title: "يوتيوب", en: "YouTube Tutorials", url: "https://youtube.com", cat: "platform", free: true, icon: "▶️", desc: "كنز القنوات التعليمية المجانية في كل المجالات الممكنة." },
      { title: "freeCodeCamp", en: "freeCodeCamp", url: "https://freecodecamp.org", cat: "platform", free: true, icon: "💻", desc: "منهج برمي شامل ومجاني لتعلم تطوير الويب من الصفر." },
      { title: "Canva Design School", en: "Canva", url: "https://canva.com/learn", cat: "platform", free: true, icon: "🎨", desc: "دروس مجانية في التصميم الجرافيكي والهوية البصرية من كانفا." },
      { title: "Google Digital Garage", en: "Google", url: "https://learndigital.withgoogle.com", cat: "platform", free: true, icon: "📣", desc: "احصل على شهادة معتمدة في أساسيات التسويق الرقمي من جوجل." },
      { title: "Notion Portfolio", en: "Notion", url: "https://notion.so/templates", cat: "tool", free: true, icon: "📋", desc: "قوالب مجانية لبناء ملف أعمال (Portfolio) احترافي ومنظم." },
    ]
  },
  en: {
    badge: "Start Your Journey",
    title1: "Learning",
    title2: "Resources",
    subtitle: "Carefully selected platforms and tools for each field to help you go pro",
    freeBadge: "Free",
    visitBtn: "Visit Source →",
    tabs: [
      { id: "all", label: "All" },
      { id: "marketplace", label: "Marketplaces" },
      { id: "platform", label: "Learning" },
      { id: "tool", label: "Tools" },
    ],
    resources: [
      { title: "Mostaql", en: "Mostaql", url: "https://mostaql.com", cat: "marketplace", free: true, icon: "🛒", desc: "The largest freelance platform in the Arab world to reach local clients." },
      { title: "Khamsat", en: "Khamsat", url: "https://khamsat.com", cat: "marketplace", free: true, icon: "💼", desc: "Leading Arabic platform for micro-services starting at $5." },
      { title: "Upwork", en: "Upwork", url: "https://upwork.com", cat: "marketplace", free: true, icon: "🌍", desc: "A global freelance platform opening horizons for international work." },
      { title: "Fiverr", en: "Fiverr", url: "https://fiverr.com", cat: "marketplace", free: true, icon: "🚀", desc: "A huge international market to offer your creative and tech services." },
      { title: "Coursera", en: "Coursera", url: "https://coursera.org", cat: "platform", free: false, icon: "🎓", desc: "Professional courses and certified credentials from top universities." },
      { title: "Udemy", en: "Udemy", url: "https://udemy.com", cat: "platform", free: false, icon: "📚", desc: "Practical courses in various languages to develop your skills quickly." },
      { title: "YouTube", en: "YouTube Tutorials", url: "https://youtube.com", cat: "platform", free: true, icon: "▶️", desc: "A treasure trove of free educational channels in every possible field." },
      { title: "freeCodeCamp", en: "freeCodeCamp", url: "https://freecodecamp.org", cat: "platform", free: true, icon: "💻", desc: "A comprehensive and free coding curriculum for web development." },
      { title: "Canva Design School", en: "Canva", url: "https://canva.com/learn", cat: "platform", free: true, icon: "🎨", desc: "Free lessons in graphic design and visual identity from Canva." },
      { title: "Google Digital Garage", en: "Google", url: "https://learndigital.withgoogle.com", cat: "platform", free: true, icon: "📣", desc: "Get a certified credential in digital marketing basics from Google." },
      { title: "Notion Portfolio", en: "Notion", url: "https://notion.so/templates", cat: "tool", free: true, icon: "📋", desc: "Free templates to build a professional and organized portfolio." },
    ]
  }
};

export default function ResourcesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [tab, setTab] = useState("all");
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];
  
  // تصفية المصادر بناءً على التبويب المختار واللغة الحالية
  const filtered = tab === "all" ? current.resources : current.resources.filter((r) => r.cat === tab);

  return (
    <section id="resources" className="py-24" style={{ backgroundColor: "var(--bg, #0d0d0d)" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 💡 العنوان الضخم الموحد */}
        <div ref={ref} className="reveal text-center mb-12">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">
            {current.badge}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            {current.title1} <span className="gradient-text">{current.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 font-medium">
            {current.subtitle}
          </p>
        </div>

        {/* أزرار التبويبات (Tabs) */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {current.tabs.map((t) => (
            <button 
              key={t.id} 
              onClick={() => setTab(t.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                tab === t.id 
                ? "bg-[#f97316] border-[#f97316] text-white shadow-lg shadow-orange-500/20" 
                : "bg-[#141414] border-[#242424] text-gray-400 hover:border-[#f97316]/40 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* شبكة المصادر */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((r, i) => (
            <a 
              key={i} 
              href={r.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-hover bg-[#141414] border border-[#242424] rounded-[24px] p-6 flex flex-col transition-all hover:border-[#f97316]/30 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{r.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-black text-base truncate">{r.title}</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{r.en}</div>
                </div>
                {r.free && (
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full uppercase">
                    {current.freeBadge}
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                {r.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-[#242424] text-[#f97316] text-xs font-bold transition-transform group-hover:translate-x-1">
                {current.visitBtn}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
