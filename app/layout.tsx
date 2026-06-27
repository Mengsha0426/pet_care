import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宠物洗护 | 爪爪氧护沙龙",
  description:
    "为猫咪和狗狗提供安心洗护、美容修剪、深层护理与接送服务，一站式宠物洗护单页。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
