"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import Modal from "@/components/Modal";

const events = [
  {
    title: "ندوة دراما رمضان 2026",
    desc: "تكريم صناع الدراما ومنح جوائز لأفضل الأعمال بالتعاون مع مشروع بمقدار وبصمة مصرية.",
    expanded: "ندوة دراما رمضان 2026 هي حدث سنوي يجمع نخبة من صناع الدراما المصريين لمناقشة أبرز التحديات والإنجازات في الموسم الرمضاني. بالتعاون مع مشروع بمقدار وبصمة مصرية، قام فريق U-TURN B بتنظيم حفل تكريمي لمنح جوائز لأفضل الأعمال الدرامية التي أثرت المحتوى المصري وأبرزت المواهب الشابة في مجال الإنتاج والتمثيل والكتابة.",
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393258/photo_2026-04-26_06-53-34_tt4k1g.jpg",
    gallery: [
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393259/photo_2026-04-26_06-53-31_gmhwjd.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393258/photo_2026-04-26_06-53-30_ccte3h.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393258/photo_2026-04-26_06-53-28_k3qhkn.jpg"
    ]
  },
  {
    title: "مبادرة SHE CAN",
    desc: "مشاركة الفريق في فعاليات لدعم وتمكين المرأة وتعزيز مهاراتها المهنية.",
    expanded: "مبادرة SHE CAN تهدف إلى دعم وتمكين المرأة economically واجتماعياً من خلال سلسلة من الفعاليات التدريبية والورش العملية. شارك فريق U-TURN B في هذه المبادرة بتقديم ورش عمل متخصصة في مجال العمل الحر، لمساعدة السيدات على اكتساب المهارات اللازمة لبدء مسيرتهن المهنية بشكل مستقل.",
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393259/photo_2026-04-26_06-53-42_zv0d6m.jpg",
    gallery: [
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393258/photo_2026-04-26_06-53-45_rcei7n.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393258/photo_2026-04-26_06-53-44_k6zarj.jpg"
    ]
  },
  {
    title: "إفطار رمضان",
    desc: "مائدة إفطار جماعي للفريق وتوزيع هدايا على طلاب الكلية لنشر البهجة.",
    expanded: "في أجواء رمضانية مباركة، نظم فريق U-TURN B مائدة إفطار جماعي جمع أعضاء الفريق وطلاب كلية الإعلام. تضمن الحدث توزيع هدايا رمضانية على الطلاب بهدف نشر البهجة والتواصل الاجتماعي الإيجابي داخل الحرم الجامعي.",
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393295/photo_2026-04-26_06-53-54_hfqz2m.jpg",
    gallery: [
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393259/photo_2026-04-26_06-53-47_hjbsec.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393291/photo_2026-04-26_06-53-50_mruejp.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393297/photo_2026-04-26_06-53-52_ug9pfh.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393296/photo_2026-04-26_06-53-55_aei2v5.jpg"
    ]
  },
  {
    title: "يوم اليتيم",
    desc: 'بالتعاون مع فريق "بين نبضين" لتنظيم أنشطة ترفيهية وتوزيع هدايا للأطفال.',
    expanded: 'بالتعاون مع فريق "بين نبضين" التطوعي، شارك فريق U-TURN B في تنظيم يوم ترفيهي مخصص للأطفال الأيتام. تضمن اليوم ألعاباً ومسابقات وتوزيع هدايا عينية، بهدف إدخال الفرحة على قلوب الأطفال وتعزيز قيم المسؤولية الاجتماعية بين الشباب المتطوعين.',
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393289/photo_2026-04-26_06-54-21_egyzzi.jpg",
    gallery: [
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393289/photo_2026-04-26_06-54-03_ryf2z8.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393295/photo_2026-04-26_06-53-57_mnqli8.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393295/photo_2026-04-26_06-54-02_fqpk5z.jpg"
    ]
  },
  {
    title: "عيد الأم",
    desc: 'بالتعاون مع جمعية "رسالة" لتجهيز وتوزيع شنط وهدايا للأمهات تعبيراً عن التقدير.',
    expanded: 'بمناسبة عيد الأم، تعاون فريق U-TURN B مع جمعية "رسالة" الخيرية في حملة توزيع شنط وهدايا على الأمهات المحتاجات. شملت المبادرة تجهيز أكثر من 50 شنطة غذائية وصحية، وتوزيعها في المناطق المجاورة لجامعة القاهرة تعبيراً عن التقدير والامتنان لدور الأمهات في المجتمع.',
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393290/photo_2026-04-26_06-54-22_h8qy0x.jpg",
    gallery: []
  },
  {
    title: "مستشفى بهية",
    desc: "زيارة لدعم محاربات سرطان الثدي والمساهمة في كفالة جهاز طبي.",
    expanded: "ضمن فعاليات المسؤولية الاجتماعية، قام فريق U-TURN B بزيارة مستشفى بهية لدعم محاربات سرطان الثدي. شملت الزيارة تقديم الهدايا المعنوية للمريضات، والمساهمة في حملة كفالة جهاز طبي ضروري لعلاج المرضى غير القادرين.",
    mainImage: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393290/photo_2026-04-26_06-54-24_tsscxr.jpg",
    gallery: [
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393289/photo_2026-04-26_06-54-22_2_vvm24u.jpg",
      "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393290/photo_2026-04-26_06-54-24_2_grlbjy.jpg"
    ]
  }
];

export default function ActivitiesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const [activeEvent, setActiveEvent] = useState<typeof events[0] | null>(null);

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {lang === "ar" ? "نشاطات حملتنا" : "Our Campaign Activities"}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#095c56] mb-2">
            {lang === "ar" ? "نشاطات حملتنا" : "Our Campaign Activities"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((e, i) => (
            <div
              key={i}
              onClick={() => setActiveEvent(e)}
              className="bg-white border border-[#095c56]/10 rounded-xl overflow-hidden shadow-sm hover:border-[#f97316]/40 transition-all cursor-pointer hover:-translate-y-1 group"
              role="button"
              tabIndex={0}
              onKeyDown={(k) => { if (k.key === "Enter") setActiveEvent(e); }}
            >
              <div className="w-full aspect-video bg-[rgba(9,92,86,0.06)] border-b border-[#095c56]/10 overflow-hidden flex items-center justify-center">
                <img
                  src={e.mainImage}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-[#095c56] mb-2">{e.title}</h3>
                <p className="text-[#095c56]/60 text-xs leading-relaxed">{e.desc}</p>
                <span className="inline-block mt-3 text-[#f97316] text-[10px] font-bold">{lang === "ar" ? "اضغط للتفاصيل ←" : "Click for details ←"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!activeEvent} onClose={() => setActiveEvent(null)}>
        {activeEvent && (
          <div className="p-6 md:p-8">
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-5 border border-[#095c56]/10">
              <img
                src={activeEvent.mainImage}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-black text-[#095c56] mb-3">{activeEvent.title}</h3>
            <p className="text-[#095c56]/70 text-sm leading-relaxed mb-5">{activeEvent.expanded}</p>
            
            {activeEvent.gallery.length > 0 && (
              <>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#095c56]/40 mb-3">
                  {lang === "ar" ? "معرض الصور" : "Photo Gallery"}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeEvent.gallery.map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-[#095c56]/10">
                      <img
                        src={img}
                        alt={`${activeEvent.title} gallery ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
