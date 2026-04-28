import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "U-TURN B | حملة الفريالنس",
  description: "حملة توعوية تهدف إلى نشر ثقافة العمل الحر بين الشباب المصري",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
