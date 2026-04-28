"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about",      labelAr: "من نحن",      labelEn: "About" },
  { href: "#fields",     labelAr: "المجالات",     labelEn: "Fields" },
  { href: "#quiz",       labelAr: "اعرف مجالك",   labelEn: "Quiz" },
  { href: "#stories",    labelAr: "قصص نجاح",    labelEn: "Stories" },
  { href: "#faq",        labelAr: "أسئلة شائعة",  labelEn: "FAQ" },
  { href: "#activities", labelAr: "أنشطتنا",      labelEn: "Activities" },
  { href: "#resources",  labelAr: "مصادر",        labelEn: "Resources" },
  { href: "#media",      labelAr: "تغطية إعلامية", labelEn: "Media" },
  { href: "#contact",    labelAr: "تواصل معنا",   labelEn: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [lang, setLang]           = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode]   = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Apply language direction
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-8 h-8">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 L32 22 Q32 32 22 32 L8 32" stroke="#095c56" strokeWidth="4" strokeLinecap="round"/>
              <path d="M14 26 L8 32 L14 38" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-black text-xl" style={{ color: "var(--text-primary)" }}>
            U-TURN <span style={{ color: "#f97316" }}>B</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-sm font-medium">
                {t(l.labelAr, l.labelEn)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls: Lang + Theme toggles */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <div
            className="lang-pill"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            role="button"
            aria-label="Switch language"
          >
            <span className={lang === "ar" ? "active-lang" : ""}>AR</span>
            <span className={lang === "en" ? "active-lang" : ""}>EN</span>
          </div>

          {/* Theme toggle */}
          <div
            className={`toggle-track ${!darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            role="button"
            aria-label={t("تبديل المظهر", "Toggle theme")}
            title={t(darkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن", darkMode ? "Light mode" : "Dark mode")}
          >
            <div className="toggle-thumb" />
            {/* Sun/Moon icons */}
            <span
              className="absolute top-0 right-0 w-full h-full flex items-center justify-around pointer-events-none px-1"
              style={{ fontSize: "9px" }}
            >
              <span style={{ opacity: darkMode ? 0.3 : 1 }}>☀️</span>
              <span style={{ opacity: darkMode ? 1 : 0.3 }}>🌙</span>
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "var(--text-primary)" }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "var(--text-primary)" }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "var(--text-primary)" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}
        >
          {/* Mobile toggles */}
          <div className="flex items-center justify-center gap-4 px-6 pt-4 pb-2">
            <div className="lang-pill" onClick={() => setLang(lang === "ar" ? "en" : "ar")} role="button">
              <span className={lang === "ar" ? "active-lang" : ""}>AR</span>
              <span className={lang === "en" ? "active-lang" : ""}>EN</span>
            </div>
            <div
              className={`toggle-track ${!darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
              role="button"
            >
              <div className="toggle-thumb" />
            </div>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {t(darkMode ? "وضع داكن" : "وضع فاتح", darkMode ? "Dark" : "Light")}
            </span>
          </div>
          <hr style={{ borderColor: "var(--border)" }} className="mx-6" />
          <div className="px-6 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-medium border-b last:border-0 transition-colors"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {t(l.labelAr, l.labelEn)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
