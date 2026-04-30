"use client";

import { intelligenceMap, type IntelligenceType } from "@/data/questions";

interface IntroScreenProps {
  onStart: () => void;
}

const floatingBubbles: { key: IntelligenceType; size: number; desktopSize: number; x: number; y: number; delay: number }[] = [
  { key: "linguistic", size: 60, desktopSize: 100, x: 10, y: 15, delay: 0 },
  { key: "logical", size: 48, desktopSize: 80, x: 80, y: 10, delay: 0.3 },
  { key: "spatial", size: 54, desktopSize: 90, x: 70, y: 70, delay: 0.6 },
  { key: "bodily", size: 42, desktopSize: 70, x: 15, y: 75, delay: 0.9 },
  { key: "musical", size: 50, desktopSize: 85, x: 85, y: 45, delay: 1.2 },
  { key: "interpersonal", size: 46, desktopSize: 75, x: 25, y: 45, delay: 1.5 },
  { key: "intrapersonal", size: 38, desktopSize: 65, x: 55, y: 85, delay: 1.8 },
  { key: "naturalist", size: 44, desktopSize: 72, x: 45, y: 20, delay: 2.1 },
];

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating intelligence bubbles */}
      {floatingBubbles.map((bubble) => {
        const info = intelligenceMap[bubble.key];
        return (
          <div
            key={bubble.key}
            className="absolute rounded-full flex items-center justify-center opacity-15 intro-bubble"
            style={{
              "--mobile-size": `${bubble.size}px`,
              "--desktop-size": `${bubble.desktopSize}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              backgroundColor: info.color,
              animation: `float 6s ease-in-out ${bubble.delay}s infinite`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg lg:max-w-2xl">
        <div
          className="inline-flex items-center justify-center w-20 h-20 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl mb-8 lg:mb-12"
          style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
        >
          <svg className="w-10 h-10 lg:w-14 lg:h-14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6" style={{ color: "#1E293B" }}>
          나의 다중지능
          <br />
          <span style={{ color: "#2563EB" }}>진로적성 진단</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mb-3 lg:mb-5" style={{ color: "#64748B" }}>
          가드너의 다중지능 이론을 기반으로
          <br />
          나만의 강점 지능을 발견해보세요.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10 lg:mb-14" style={{ color: "#94A3B8" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-sm lg:text-base">56문항 · 약 5~10분 소요</span>
        </div>

        <button
          onClick={onStart}
          className="cursor-pointer px-10 py-4 lg:px-14 lg:py-5 rounded-2xl text-white font-bold text-lg lg:text-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
        >
          진단 시작하기
        </button>

        <p className="mt-6 text-xs lg:text-sm" style={{ color: "#94A3B8" }}>
          로그인 없이 바로 시작할 수 있어요
        </p>
      </div>

    </div>
  );
}
