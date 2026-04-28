import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "U-TURN B | حملة الفريلانس",
  description: "حملة توعوية تهدف إلى نشر ثقافة العمل الحر بين الشباب المصري",
  icons: {
    icon: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393428/ChatGPT_Image_Apr_28_2026_07_23_36_PM_fptutl.png",
    shortcut: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393428/ChatGPT_Image_Apr_28_2026_07_23_36_PM_fptutl.png",
    apple: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393428/ChatGPT_Image_Apr_28_2026_07_23_36_PM_fptutl.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
