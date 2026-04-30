import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "나의 다중지능 진로적성 진단",
  description: "가드너의 다중지능 이론 기반 56문항 진로적성 진단. 나의 강점 지능을 발견하고, 어울리는 직업을 찾아보세요.",
  openGraph: {
    title: "나의 다중지능 진로적성 진단",
    description: "56문항으로 알아보는 나의 강점 지능과 맞춤 직업 추천",
    url: "https://career-aptitude-app.vercel.app",
    siteName: "다중지능 진로적성 진단",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "나의 다중지능 진로적성 진단",
    description: "56문항으로 알아보는 나의 강점 지능과 맞춤 직업 추천",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
