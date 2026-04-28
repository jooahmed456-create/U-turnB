"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

// 💡 قاموس اللغات الشامل للأسئلة الشائعة بناءً على بياناتك
const dictionary = {
  ar: {
    badge: "لديك تساؤل؟",
    title1: "الأسئلة",
    title2: "الشائعة",
    faqs: [
      { 
        q: "هل العمل الحر مضمون؟", 
        a: "لا، لكنه يمكن أن يكون مصدر دخل ثابت مع الوقت لو عندك مهارة والتزام. كثير من الفريلانسرز يصلون لدخل يتجاوز الوظيفة التقليدية." 
      }, // [cite: 12, 13]
      { 
        q: "أبدأ منين في الفريلانس؟", 
        a: "ابدأ بتعلم مهارة مطلوبة، واشتغل على نفسك وبروفايلك، وجرب بمشاريع صغيرة. منصات مثل مستقل وخمسات مثالية للبداية." 
      }, // [cite: 14, 15]
      { 
        q: "هل لازم يكون عندي خبرة؟", 
        a: "ليس شرطاً! يمكنك البدء بمشاريع بسيطة وتتعلم تدريجياً حتى تبني خبرة. كل خبير كان مبتدئاً في يوم ما." 
      }, // [cite: 16, 17]
      { 
        q: "هل الفريلانس بديل للوظيفة؟", 
        a: "يمكن أن يكون بديلاً كاملاً مع الوقت، لكن في البداية الأفضل اعتباره دخلاً إضافياً حتى تستقر وتبني قاعدة عملاء ثابتة." 
      }, // [cite: 18, 19]
      { 
        q: "إزاي أجيب أول عميل؟", 
        a: "اعرض شغلك بوضوح، استخدم منصات الفريلانس، وابدأ بدائرة معارفك. الأهم أن أول عميل سيفتح لك الأبواب التالية." 
      }, // [cite: 20, 21]
      { 
        q: "كم الوقت الذي أحتاجه لأبدأ الكسب؟", 
        a: "يختلف من شخص لآخر، لكن مع التعلم المنتظم والممارسة، يبدأ الكثير من الناس بكسب أولى مبالغهم خلال ٣-٦ أشهر." 
      },
    ]
  },
  en: {
    badge: "Have a Question?",
    title1: "Frequent",
    title2: "Questions",
    faqs: [
      { 
        q: "Is freelancing guaranteed?", 
        a: "No, but it can become a steady income source over time with skill and commitment. Many freelancers earn more than traditional jobs." 
      },
      { 
        q: "Where do I start in freelancing?", 
        a: "Start by learning a high-demand skill, work on your profile, and try small projects. Platforms like Mostaql and Khamsat are great for beginners." 
      },
      { 
        q: "Do I need experience to start?", 
        a: "Not necessarily! You can start with simple projects and learn gradually. Every expert was once a beginner." 
      },
      { 
        q: "Is freelancing a substitute for a job?", 
        a: "It can be a full-time substitute eventually, but initially, it's best to treat it as extra income until you build a steady client base." 
      },
      { 
        q: "How do I get my first client?", 
        a: "Showcase your work clearly, use freelance platforms, and start with your network. The first client is the key to many more." 
      },
      { 
        q: "How long does it take to start earning?", 
        a: "It varies, but with regular learning and practice, many people start earning their first income within 3-6 months." 
      },
    ]
  }
};

export default function FaqSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();
  
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* 💡 العنوان الضخم الموحد */}
        <div ref={ref} className="reveal text-center mb-14">
          <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-3 block">
            {current.badge}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            {current.title1} <span className="gradient-text">{current.title2}</span>
          </h2>
        </div>

        {/* قائمة الأسئلة */}
        <div className="space-y-4">
          {current.faqs.map((item, i) => (
            <div 
              key={i} 
              className={`bg-[#141414] border rounded-[22px] overflow-hidden transition-all duration-300 ${open === i ? "border-[#f97316]/50 shadow-lg shadow-orange-500/5" : "border-[#242424]"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between px-6 py-6 md:px-8 text-right gap-4 transition-colors ${open === i ? "bg-[#f97316]/5" : ""}`}
              >
                <span className={`font-bold text-lg md:text-xl ${open === i ? "text-white" : "text-gray-300 hover:text-white"}`}>
                  {item.q}
                </span>
                <span className={`text-2xl leading-none shrink-0 transition-transform duration-500 ${open === i ? "rotate-45 text-[#f97316]" : "text-gray-500"}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-6 pb-6 md:px-8 md:pb-8 text-gray-400 leading-loose text-base border-t border-[#242424] pt-4">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
