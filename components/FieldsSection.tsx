"use client";
import { useReveal } from "@/lib/useReveal";

// 💡 قاموس اللغات الشامل لمجالات العمل الحر بناءً على ملف البيانات
const dictionary = {
  ar: {
    badge: "استكشف مسارك",
    title1: "مجالات",
    title2: "الفريالنس",
    subtitle: "أربعة مسارات رئيسية — اختر ما يناسب شخصيتك ومهاراتك للبدء في رحلتك",
    toolsLabel: "أدوات مقترحة لبدايتك",
    fields: [
      {
        id: "design",
        icon: "🎨",
        title: "مجال التصميم",
        enTitle: "Design",
        desc: "إذا كان لديك حس بصري وإبداعي قوي وتحب التفاصيل الجمالية. مناسب جداً لمجالات الجرافيك ديزاين، المونتاج، وتصميم السوشيال ميديا.", // [cite: 24, 25]
        tools: ["Photoshop", "Canva", "Figma"], // [cite: 26]
        color: "from-purple-500/20 to-purple-900/10",
        border: "border-purple-500/30",
        accent: "purple-400"
      },
      {
        id: "writing",
        icon: "✍️",
        title: "مجال الكتابة",
        enTitle: "Writing",
        desc: "لمن لديهم قدرة مميزة على التعبير بالكلام وتوصيل الأفكار بشكل مقنع. مناسب لكتابة المحتوى، الترجمة، والـ Copywriting.", // [cite: 27]
        tools: ["Notion", "Grammarly", "WordPress"], // [cite: 28]
        color: "from-blue-500/20 to-blue-900/10",
        border: "border-blue-500/30",
        accent: "blue-400"
      },
      {
        id: "programming",
        icon: "💻",
        title: "مجال البرمجة",
        enTitle: "Programming",
        desc: "إذا كنت تملك تفكيراً منطقياً وحباً للتكنولوجيا وتستمتع بحل المشاكل وفهم الأنظمة. مناسب لتطوير المواقع والتطبيقات.", // [cite: 29]
        tools: ["VS Code", "HTML/CSS", "JavaScript"], // [cite: 30]
        color: "from-green-500/20 to-green-900/10",
        border: "border-green-500/30",
        accent: "green-400"
      },
      {
        id: "marketing",
        icon: "📣",
        title: "مجال التسويق",
        enTitle: "Marketing",
        desc: "لأصحاب المهارة في التأثير على الناس وفهمهم، ومحبي التريندات والتفاعل. مناسب للتسويق الرقمي وإدارة السوشيال ميديا.", // [cite: 31]
        tools: ["Meta Ads", "Google Ads", "Google Analytics"], // [cite: 32]
        color: "from-orange-500/20 to-orange-900/10",
        border: "border-[#f97316]/30",
        accent: "[#f97316]"
      },
    ]
  },
  en: {
    badge: "Explore Your Path",
    title1: "Freelance",
    title2: "Fields",
    subtitle: "Four main tracks — choose what suits your personality and skills to start your journey",
    toolsLabel: "Suggested tools to start",
    fields: [
      {
        id: "design",
        icon: "🎨",
        title: "Design Field",
        enTitle: "Visual Arts",
        desc: "For those with a strong creative sense who love aesthetics. Perfect for Graphic Design, Video Editing, and Social Media design.",
        tools: ["Photoshop", "Canva", "Figma"],
        color: "from-purple-500/20 to-purple-900/10",
        border: "border-purple-500/30",
        accent: "purple-400"
      },
      {
        id: "writing",
        icon: "✍️",
        title: "Writing Field",
        enTitle: "Content Creation",
        desc: "For those with a unique ability to express through words. Ideal for Content Writing, Translation, and Copywriting.",
        tools: ["Notion", "Grammarly", "WordPress"],
        color: "from-blue-500/20 to-blue-900/10",
        border: "border-blue-500/30",
        accent: "blue-400"
      },
      {
        id: "programming",
        icon: "💻",
        title: "Programming Field",
        enTitle: "Tech Development",
        desc: "For logical thinkers who enjoy problem-solving and systems. Suitable for Web and App development.",
        tools: ["VS Code", "HTML/CSS", "JavaScript"],
        color: "from-green-500/20 to-green-900/10",
        border: "border-green-500/30",
        accent: "green-400"
      },
      {
        id: "marketing",
        icon: "📣",
        title: "Marketing Field",
        enTitle: "Digital Growth",
        desc: "For those skilled in influencing people and following trends. Perfect for Digital Marketing and Social Media Management.",
        tools: ["Meta Ads", "Google Ads", "Google Analytics"],
        color: "from-orange-500/20 to-orange-900/10",
        border: "border-[#f97316]/30",
        accent: "[#f97316]"
      },
    ]
  }
};

export default function FieldsSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="fields" className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className="reveal">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">
            {current.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--text-primary, #fff)" }}>
            {current.title1} <span className="gradient-text">{current.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary, #9ca3af)" }}>
            {current.subtitle}
          </p>
        </div>

        {/* شبكة المجالات */}
        <div className="grid md:grid-cols-2 gap-6">
          {current.fields.map((f, i) => (
            <div 
              key={f.id}
              className={`card-hover bg-gradient-to-br ${f.color} border ${f.border} rounded-[28px] p-8 md:p-10 reveal reveal-delay-${i+1} transition-all`}
            >
              <div className="flex items-center gap-5 mb-6">
                <span className="text-5xl md:text-6xl drop-shadow-lg">{f.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black" style={{ color: "var(--text-primary, #fff)" }}>
                    {f.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                    {f.enTitle}
                  </span>
                </div>
              </div>
              
              <p className="leading-relaxed mb-8 text-[15px]" style={{ color: "var(--text-secondary, #d1d5db)" }}>
                {f.desc}
              </p>
              
              <div className="pt-6 border-t" style={{ borderColor: "var(--border, #242424)" }}>
                <p className="text-xs font-bold mb-4 uppercase tracking-widest opacity-60" style={{ color: "var(--text-muted, #6b7280)" }}>
                  {current.toolsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.tools.map((t) => (
                    <span 
                      key={t} 
                      className="bg-[#0a0a0a]/40 border text-xs font-bold px-4 py-1.5 rounded-full transition-colors hover:bg-[#f97316]/10"
                      style={{ borderColor: "var(--border, #242424)", color: "var(--text-primary, #fff)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
