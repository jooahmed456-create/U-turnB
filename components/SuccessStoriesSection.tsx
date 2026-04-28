"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import Modal from "@/components/Modal";

const sectionDict = {
  ar: {
    badge: "إلهام حقيقي",
    title: "قصص نجاح",
    cta: "اضغط للتفاصيل ←",
    follow: "تابع الشخص",
    readMore: "اقرأ المزيد"
  },
  en: {
    badge: "Real Inspiration",
    title: "Success Stories",
    cta: "Click for details ←",
    follow: "Follow Person",
    readMore: "Read more"
  }
};

const stories = [
  {
    nameAr: "كارولين ديفيدسون",
    nameEn: "Carolyn Davidson",
    role: "Graphic Designer",
    image: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777395698/photo_2026-04-28_20-00-55_fq2tvs.jpg",
    descAr: "مصممة فريلانسر صممت شعار Nike الشهير مقابل أجر بسيط، ليصبح لاحقًا من أشهر الشعارات عالميًا.",
    descEn: "A freelance designer who created the famous Nike logo for a small fee, which later became one of the most recognized logos globally.",
    fullDescAr: "كارولين ديفيدسون هي مصممة جرافيك فريلانسر أمريكية اشتهرت بتصميم شعار Nike الشهير 'Swoosh' عام 1971. في ذلك الوقت، كانت طالبة جامعية وتعمل كفريلانسر. صممت الشعار مقابل مبلغ بسيط لم يتجاوز 35 دولاراً، ليصبح لاحقاً واحداً من أشهر وأكثر الشعارات قيمة في العالم، حيث أصبحت Nike شركة عالمية عملاقة. قصتها تُعدّ من أبرز الأمثلة على كيف يمكن للموهبة الفردية أن تترك بصمة خالدة في عالم التصميم.",
    fullDescEn: "Carolyn Davidson is an American freelance graphic designer who became famous for creating Nike's iconic 'Swoosh' logo in 1971. At the time, she was a university student working as a freelancer. She designed the logo for a modest fee of just $35, which later became one of the most famous and valuable logos in the world as Nike grew into a global giant. Her story stands as one of the most powerful examples of how individual talent can leave a lasting mark on the design world.",
    link: "https://en.wikipedia.org/wiki/Carolyn_Davidson_(graphic_designer)",
    gallery: []
  },
  {
    nameAr: "لوكاس ميسينغ",
    nameEn: "Lucas Masing",
    role: "Videographer & Filmmaker",
    image: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393291/photo_2026-04-28_19-17-39_ellnem.jpg",
    descAr: "فريلانسر يعمل كـ videographer و filmmaker، تعاون مع براندات عالمية مثل Dior.",
    descEn: "A freelance videographer and filmmaker who collaborated with global brands like Dior, delivering visually distinctive cinematic content.",
    fullDescAr: "لوكاس ميسينغ هو مخرج ومصور سينمائي فريلانسر ألماني استطاع بناء سمعته في عالم الإنتاج المرئي من خلال العمل المستقل. تعاون مع علامات تجارية عالمية رفيعة المستوى مثل Dior وغيرها من الشركات الفاخرة. يُعدّ مثالاً حياً على كيف يمكن للفريلانسر في مجال الفيديو والسينما أن يصل إلى أرفع المستويات من خلال الالتزام بالجودة وبناء علاقات مهنية قوية.",
    fullDescEn: "Lucas Masing is a German freelance director and cinematographer who built his reputation in visual production through independent work. He collaborated with high-end global brands such as Dior and other luxury companies. He serves as a living example of how a freelancer in video and cinema can reach the highest levels through commitment to quality and building strong professional relationships.",
    link: "https://www.instagram.com/lucasmasing/",
    gallery: []
  },
  {
    nameAr: "درو ستروزان",
    nameEn: "Drew Struzan",
    role: "Illustrator & Movie Poster Artist",
    image: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393291/photo_2026-04-28_19-17-49_wxyirk.jpg",
    descAr: "فنان فريلانسر اشتهر بتصميم بوسترات أفلام أيقونية، أبرزها سلسلة Star Wars.",
    descEn: "A freelance artist famous for designing iconic movie posters, most notably the Star Wars series.",
    fullDescAr: "درو ستروزان هو فنان أمريكي فريلانسر يُعتبر من أشهر رسامي بوسترات الأفلام في تاريخ هوليوود. اشتهر بتصميم بوسترات أفلام أيقونية مثل سلسلة Star Wars وIndiana Jones وBack to the Future وThe Goonies. على الرغم من عمله كفريلانسر، أصبحت أعماله جزءاً لا يتجزأ من ذاكرة السينما العالمية، مما يثبت أن العمل الحر يمكن أن يصل إلى قمة الإبداع والشهرة.",
    fullDescEn: "Drew Struzan is an American freelance artist considered one of the most famous movie poster illustrators in Hollywood history. He became renowned for designing iconic movie posters such as the Star Wars series, Indiana Jones, Back to the Future, and The Goonies. Despite working as a freelancer, his art became an inseparable part of global cinema memory, proving that freelance work can reach the peak of creativity and fame.",
    link: "https://en.wikipedia.org/wiki/Drew_Struzan",
    gallery: []
  },
  {
    nameAr: "سايمون أوكسلي",
    nameEn: "Simon Oxley",
    role: "Graphic Designer",
    image: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393292/photo_2026-04-28_19-18-01_bnyqyl.jpg",
    descAr: "مصمم جرافيك فريلانسر أنشأ أيقونة طائر Twitter وتم شراؤها لاحقًا لتصبح شعار المنصة.",
    descEn: "A freelance graphic designer who created the original Twitter bird icon and uploaded it as a stock design, which was later purchased to become the platform's famous logo.",
    fullDescAr: "سايمون أوكسلي هو مصمم جرافيك بريطاني يعمل كفريلانسر. خلال مسيرته، صمم أيقونة طائر أزرق صغير كجزء من مجموعة أيقونات للبيع على منصة iStock. في عام 2006، اشترت شركة Twitter هذه الأيقونة لتصبح الشعار الأصلي للمنصة، قبل أن يتم إعادة تصميمها لاحقاً. قصته تُظهر كيف يمكن للعمل الحر أن يؤدي إلى إنشاء رموز ثقافية عالمية دون قصد.",
    fullDescEn: "Simon Oxley is a British freelance graphic designer. During his career, he designed a small blue bird icon as part of an icon set for sale on iStock. In 2006, Twitter purchased this icon to become the platform's original logo before it was later redesigned. His story demonstrates how freelance work can lead to the creation of global cultural symbols unintentionally.",
    link: "https://en.wikipedia.org/wiki/Simon_Oxley",
    gallery: []
  }
];

export default function SuccessStoriesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const [activeStory, setActiveStory] = useState<(typeof stories)[0] | null>(null);
  const sect = sectionDict[lang] || sectionDict["ar"];

  return (
    <section id="stories" className="py-16 bg-[rgba(9,92,86,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {sect.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#095c56] mb-2">
            {sect.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stories.map((s, i) => (
            <div
              key={i}
              onClick={() => setActiveStory(s)}
              className="bg-white border border-[#095c56]/10 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all cursor-pointer hover:border-[#f97316]/30 group"
              role="button"
              tabIndex={0}
              onKeyDown={(k) => { if (k.key === "Enter") setActiveStory(s); }}
            >
              <div className="w-full aspect-[4/3] bg-[rgba(9,92,86,0.06)] border-b border-[#095c56]/10 overflow-hidden flex items-center justify-center">
                <img
                  src={s.image}
                  alt={lang === "ar" ? s.nameAr : s.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#095c56] mb-1.5 leading-snug">
                  {lang === "ar" ? s.nameAr : s.nameEn}
                </h3>
                <p className="text-[#095c56]/60 text-xs leading-relaxed">
                  {lang === "ar" ? s.descAr : s.descEn}
                </p>
                <span className="inline-block mt-2 text-[#f97316] text-[10px] font-bold">
                  {sect.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!activeStory} onClose={() => setActiveStory(null)}>
        {activeStory && (
          <div className="p-6 md:p-8">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img
                src={activeStory.image}
                alt={lang === "ar" ? activeStory.nameAr : activeStory.nameEn}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-black text-[#095c56] mb-1">
              {lang === "ar" ? activeStory.nameAr : activeStory.nameEn}
            </h3>
            <p className="text-[#f97316] text-xs font-bold mb-4">{activeStory.role}</p>
            <p className="text-[#095c56]/70 text-sm leading-relaxed mb-5">
              {lang === "ar" ? activeStory.fullDescAr : activeStory.fullDescEn}
            </p>

            <div className="flex items-center gap-3 mb-5">
              <a
                href={activeStory.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f97316] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#ea580c] transition-colors hover:scale-105 transform"
              >
                {sect.readMore}
              </a>
              <a
                href={activeStory.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#095c56]/15 text-[#095c56] text-xs font-bold px-5 py-2.5 rounded-xl hover:border-[#f97316] hover:text-[#f97316] transition-colors hover:scale-105 transform"
              >
                {sect.follow}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
