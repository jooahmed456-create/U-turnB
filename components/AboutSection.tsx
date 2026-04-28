"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    title: "من نحن",
    body: "نحن طلاب بكلية الإعلام – جامعة القاهرة، يجمعنا الشغف والطموح لإحداث تأثير إيجابي. نقدم حملة توعوية متكاملة تهدف إلى نشر ثقافة العمل الحر (الفريلانس) بين الشباب، وتوضيح الفرص الحقيقية والآفاق الواسعة التي يتيحها هذا المجال المتطور. نسعى من خلال مبادرتنا إلى تصحيح المفاهيم الخاطئة والشائعة حول الفريلانس، وتمكين الشباب بالمعرفة والأدوات اللازمة، وتشجيعهم على اتخاذ خطوات واثقة نحو بناء مستقبل مهني مستقل ومستدام يتناسب مع مهاراتهم وتطلعاتهم."
  },
  en: {
    title: "About Us",
    body: "We are students at the Faculty of Mass Communication – Cairo University, united by passion and ambition to make a positive impact. We present a comprehensive awareness campaign aimed at spreading the culture of freelancing among youth, highlighting the real opportunities and broad horizons this evolving field offers. Through our initiative, we seek to correct common misconceptions about freelancing, empower youth with knowledge and tools, and encourage them to take confident steps toward building an independent, sustainable professional future tailored to their skills."
  }
};

export default function AboutSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="about" className="py-16 bg-[#095c56]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-10 items-center">
          {/* Text side — right in RTL */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              {current.title}
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              {current.body}
            </p>
          </div>

          {/* Image side — left in RTL */}
          <div className="w-full aspect-[4/3] bg-white border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center overflow-hidden p-4">
            <img
              src="https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393428/ChatGPT_Image_Apr_28_2026_07_23_36_PM_fptutl.png"
              alt="U-TURN B Campaign Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
