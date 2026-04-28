"use client";
import { useReveal } from "@/lib/useReveal";

// 💡 قاموس اللغات الشامل لقسم المميزات والتحديات
const dictionary = {
  ar: {
    badge: "ما تحتاج معرفته",
    title1: "المميزات",
    title2: "التحديات",
    advHeader: "مميزات العمل الحر",
    chalHeader: "تحديات العمل الحر",
    successQuote: "💡 النجاح في العمل الحر يعتمد على وعيك بالمميزات والتحديات واستعدادك للتطور والتكيّف",
    advantages: [
      { icon: "🕐", title: "حرية الوقت والمكان", body: "تستطيع العمل من أي مكان وفي أي وقت يناسبك." },
      { icon: "🎛", title: "تحكم كامل في اختياراتك", body: "أنت من تختار المشاريع والعملاء الذين تفضّل العمل معهم." },
      { icon: "📈", title: "إمكانية دخل أعلى", body: "كلما طوّرت مهاراتك وبنيت سمعة قوية، زاد دخلك." },
      { icon: "🌱", title: "تطوير مستمر للمهارات", body: "التنوع في المشاريع يساعدك على تعلم مهارات جديدة دائماً." },
      { icon: "⚖️", title: "تحقيق التوازن", body: "تستطيع تنظيم وقتك بما يناسب حياتك الشخصية." },
    ],
    challenges: [
      { icon: "💰", title: "عدم استقرار الدخل", body: "الدخل في العمل الحر غير ثابت وقد يختلف من شهر لآخر." },
      { icon: "⏱", title: "إدارة الوقت والانضباط", body: "تحتاج إلى تنظيم وقتك والالتزام بدون وجود مدير." },
      { icon: "👥", title: "الحصول على عملاء", body: "في البداية قد يكون من الصعب بناء قاعدة عملاء." },
      { icon: "🧘", title: "التعامل مع الضغط والوحدة", body: "العمل الفردي قد يسبب ضغطاً نفسياً وشعوراً بالعزلة." },
      { icon: "✅", title: "مسؤولية أكبر", body: "أنت المسؤول عن التسويق لنفسك وتنفيذ العمل معاً." },
    ]
  },
  en: {
    badge: "What You Need to Know",
    title1: "Advantages",
    title2: "Challenges",
    advHeader: "Freelancing Advantages",
    chalHeader: "Freelancing Challenges",
    successQuote: "💡 Success in freelancing depends on your awareness of the advantages and challenges and your readiness to evolve and adapt.",
    advantages: [
      { icon: "🕐", title: "Time and Location Freedom", body: "You can work from anywhere and at any time that suits you." },
      { icon: "🎛", title: "Full Control over Choices", body: "You choose the projects and clients you prefer to work with." },
      { icon: "📈", title: "Potential for Higher Income", body: "As you develop your skills and build a strong reputation, your income increases." },
      { icon: "🌱", title: "Continuous Skill Development", body: "Variety in projects helps you always learn new skills." },
      { icon: "⚖️", title: "Achieving Balance", body: "You can organize your time to fit your personal life." },
    ],
    challenges: [
      { icon: "💰", title: "Income Instability", body: "Freelance income is inconsistent and may vary from month to month." },
      { icon: "⏱", title: "Time Management and Discipline", body: "You need to organize your time and commit without a manager." },
      { icon: "👥", title: "Getting Clients", body: "In the beginning, it can be difficult to build a client base." },
      { icon: "🧘", title: "Dealing with Pressure and Loneliness", body: "Working alone can cause psychological pressure and a sense of isolation." },
      { icon: "✅", title: "Greater Responsibility", body: "You are responsible for marketing yourself and executing the work." },
    ]
  }
};

export default function AdvantagesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="advantages" className="py-24" style={{ backgroundColor: "var(--bg, #0d0d0d)" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">
            {current.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary, #fff)" }}>
            {current.title1} <span className="text-gray-500">&</span> {current.title2}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* المميزات (Advantages) */}
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "var(--card-bg, #141414)", borderColor: "var(--border, #242424)" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 text-xl">✓</div>
              <h3 className="text-2xl font-black" style={{ color: "var(--text-primary, #fff)" }}>
                {current.advHeader}
              </h3>
            </div>
            <div className="space-y-4">
              {current.advantages.map((a, i) => (
                <div key={i} 
                  className="flex gap-4 p-4 rounded-xl border transition-colors group"
                  style={{ backgroundColor: "var(--nav-bg, #0a0a0a)", borderColor: "var(--border, #242424)" }}
                >
                  <span className="text-2xl shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold mb-1 group-hover:text-green-400 transition-colors" style={{ color: "var(--text-primary, #fff)" }}>
                      {a.title}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                      {a.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* التحديات (Challenges) */}
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "var(--card-bg, #141414)", borderColor: "var(--border, #242424)" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] text-xl">⚡</div>
              <h3 className="text-2xl font-black" style={{ color: "var(--text-primary, #fff)" }}>
                {current.chalHeader}
              </h3>
            </div>
            <div className="space-y-4">
              {current.challenges.map((c, i) => (
                <div key={i} 
                  className="flex gap-4 p-4 rounded-xl border transition-colors group"
                  style={{ backgroundColor: "var(--nav-bg, #0a0a0a)", borderColor: "var(--border, #242424)" }}
                >
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <div className="font-semibold mb-1 group-hover:text-[#f97316] transition-colors" style={{ color: "var(--text-primary, #fff)" }}>
                      {c.title}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                      {c.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* المقولة الختامية */}
        <div className="mt-10 text-center p-6 border rounded-2xl" 
          style={{ backgroundColor: "rgba(249, 115, 22, 0.05)", borderColor: "rgba(249, 115, 22, 0.2)" }}
        >
          <p className="text-[#fb923c] font-semibold text-lg">
            {current.successQuote}
          </p>
        </div>

      </div>
    </section>
  );
}
