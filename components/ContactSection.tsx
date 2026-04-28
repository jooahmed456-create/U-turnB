"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

type Status = "idle" | "loading" | "success" | "error";

// 💡 قاموس اللغات الشامل لقسم التواصل
const dictionary = {
  ar: {
    badge: "نحن هنا",
    title1: "تواصل",
    title2: "معنا",
    desc: "هل لديك سؤال عن الفريلانس؟ أو تريد التعاون معنا؟ أو فقط تريد تشجيعنا على المضي قدماً؟ نحن نحب أن نسمع منك!",
    form: {
      name: "الاسم *",
      namePlace: "اسمك الكامل",
      email: "البريد الإلكتروني *",
      emailPlace: "email@example.com",
      subject: "الموضوع *",
      subjectPlace: "موضوع رسالتك",
      message: "الرسالة *",
      messagePlace: "اكتب رسالتك هنا...",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successTitle: "تم الإرسال بنجاح!",
      successDesc: "شكراً لتواصلك معنا. سنرد عليك قريباً إن شاء الله.",
      another: "إرسال رسالة أخرى",
      errorNet: "تأكد من اتصالك بالإنترنت وحاول مجدداً"
    },
    socials: [
      { id: "fb", label: "فيسبوك", href: "https://www.facebook.com/share/1DsBwyJMG1/", text: "U-TURN B" },
      { id: "ig", label: "إنستجرام", href: "https://www.instagram.com/u.turn.b", text: "@u.turn.b" },
      { id: "tk", label: "تيك توك", href: "https://www.tiktok.com/@uturnnb", text: "@uturnnb" }
    ]
  },
  en: {
    badge: "Get in Touch",
    title1: "Contact",
    title2: "Us",
    desc: "Have a question about freelancing? Want to collaborate? Or just want to cheer us on? We'd love to hear from you!",
    form: {
      name: "Name *",
      namePlace: "Your full name",
      email: "Email *",
      emailPlace: "email@example.com",
      subject: "Subject *",
      subjectPlace: "Subject of your message",
      message: "Message *",
      messagePlace: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Sent Successfully!",
      successDesc: "Thanks for reaching out. We will get back to you soon.",
      another: "Send another message",
      errorNet: "Check your internet connection and try again"
    },
    socials: [
      { id: "fb", label: "Facebook", href: "https://www.facebook.com/share/1DsBwyJMG1/", text: "U-TURN B" },
      { id: "ig", label: "Instagram", href: "https://www.instagram.com/u.turn.b", text: "@u.turn.b" },
      { id: "tk", label: "TikTok", href: "https://www.tiktok.com/@uturnnb", text: "@uturnnb" }
    ]
  }
};

// 💡 أيقونات SVG عصرية
const Icons = {
  fb: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  ig: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  tk: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31.036 2.512.335 3.6.895a7.443 7.443 0 0 1-1.34 2.898c-1.12.202-2.147.288-3.147.234a.14.14 0 0 0-.154.141v12.284c0 2.45-1.748 4.613-4.17 4.95a5.016 5.016 0 0 1-5.69-4.887c-.01-1.758 1.15-3.325 2.82-3.805a4.98 4.98 0 0 1 2.21-.085c.13.025.26-.06.26-.195V13.3c0-.115-.08-.21-.19-.234a9.145 9.145 0 0 0-1.96-.217 9.04 9.04 0 0 0-9.04 9.04c0 4.993 4.047 9.04 9.04 9.04a9.04 9.04 0 0 0 9.04-8.815V7.126a11.144 11.144 0 0 0 4.79 1.488c.11.008.204-.08.204-.19V5.04c0-.1-.08-.184-.176-.19a7.065 7.065 0 0 1-4.717-2.137c-.125-.13-.25-.268-.364-.413a.14.14 0 0 0-.21-.019l-1.93 1.94a.14.14 0 0 0-.012.186 9.42 9.42 0 0 0 1.25 1.411c-.13-.004-.26-.008-.39-.008h-2.185a.14.14 0 0 1-.14-.14V.16a.14.14 0 0 0-.14-.14h-2.18a.14.14 0 0 0-.14.14v.02z"/></svg>
  )
};

export default function ContactSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) { 
        setStatus("success"); 
        setForm({ name: "", email: "", subject: "", message: "" }); 
      } else { 
        setStatus("error"); 
        setError(json.message ?? (lang === "ar" ? "حدث خطأ ما" : "Something went wrong")); 
      }
    } catch {
      setStatus("error");
      setError(current.form.errorNet);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "var(--bg, #0d0d0d)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-start">
          
          {/* الجانب الأيسر: المعلومات والسوشيال ميديا */}
          <div>
            <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest mb-4 block">
              {current.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight" style={{ color: "var(--text-primary, #fff)" }}>
              {current.title1} <span className="gradient-text">{current.title2}</span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-12" style={{ color: "var(--text-secondary, #9ca3af)" }}>
              {current.desc}
            </p>

            <div className="grid gap-4 max-w-md">
              {current.socials.map((c) => {
                const IconComponent = Icons[c.id as keyof typeof Icons];
                return (
                  <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-[22px] border transition-all group"
                    style={{ backgroundColor: "var(--card-bg, #141414)", borderColor: "var(--border, #242424)" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ backgroundColor: "var(--bg, #0d0d0d)", color: "#f97316" }}>
                      <IconComponent />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                        {c.label}
                      </div>
                      <div className="text-lg font-black transition-colors group-hover:text-[#f97316]" style={{ color: "var(--text-primary, #fff)" }}>
                        {c.text}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* الجانب الأيمن: نموذج التواصل */}
          <div className="rounded-[32px] p-8 md:p-10 border shadow-2xl relative" 
            style={{ backgroundColor: "var(--card-bg, #141414)", borderColor: "var(--border, #242424)" }}>
            
            {status === "success" ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-7xl mb-6">✅</div>
                <h3 className="text-3xl font-black mb-4" style={{ color: "var(--text-primary, #fff)" }}>
                  {current.form.successTitle}
                </h3>
                <p className="text-lg mb-8" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                  {current.form.successDesc}
                </p>
                <button onClick={() => setStatus("idle")} className="font-bold text-[#f97316] hover:underline transition-all">
                  {current.form.another}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest mb-2 block" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                      {current.form.name}
                    </label>
                    <input name="name" value={form.name} onChange={handle} required
                      placeholder={current.form.namePlace}
                      className="w-full bg-[#0a0a0a] border border-[#242424] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#f97316] transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest mb-2 block" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                      {current.form.email}
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handle} required
                      placeholder={current.form.emailPlace}
                      className="w-full bg-[#0a0a0a] border border-[#242424] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#f97316] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest mb-2 block" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                    {current.form.subject}
                  </label>
                  <input name="subject" value={form.subject} onChange={handle} required
                    placeholder={current.form.subjectPlace}
                    className="w-full bg-[#0a0a0a] border border-[#242424] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#f97316] transition-all" />
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest mb-2 block" style={{ color: "var(--text-secondary, #9ca3af)" }}>
                    {current.form.message}
                  </label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5}
                    placeholder={current.form.messagePlace}
                    className="w-full bg-[#0a0a0a] border border-[#242424] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#f97316] transition-all resize-none" />
                </div>
                
                {status === "error" && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-[#f97316] text-white font-black py-5 rounded-2xl hover:bg-[#ea580c] disabled:opacity-50 transition-all shadow-xl shadow-orange-500/10 flex items-center justify-center gap-3 active:scale-95">
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      {current.form.sending}
                    </>
                  ) : (
                    <>
                      {current.form.send}
                      <span className="text-xl">✉️</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* زينة بسيطة في خلفية الكارت */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#f97316]/5 blur-[60px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
