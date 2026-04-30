"use client";

import { useState, useCallback, useMemo } from "react";
import { questions } from "@/data/questions";

interface QuizScreenProps {
  onComplete: (answers: Record<number, number>) => void;
}

const scaleLabels = [
  { value: 1, label: "전혀\n아니다" },
  { value: 2, label: "아닌\n편이다" },
  { value: 3, label: "보통\n이다" },
  { value: 4, label: "그런\n편이다" },
  { value: 5, label: "매우\n그렇다" },
];

function shuffleQuestions() {
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ACCENT_COLOR = "#2563EB";

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const shuffled = useMemo(() => shuffleQuestions(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const safeIndex = Math.min(currentIndex, shuffled.length - 1);
  const question = shuffled[safeIndex];
  const progress = ((safeIndex + 1) / shuffled.length) * 100;
  const selectedValue = answers[question.id];
  const isLastQuestion = safeIndex === shuffled.length - 1;

  const goToNext = useCallback(() => {
    if (currentIndex < shuffled.length - 1) {
      setDirection("next");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((i) => Math.min(i + 1, shuffled.length - 1));
        setIsAnimating(false);
      }, 200);
    }
  }, [currentIndex, shuffled.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection("prev");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((i) => Math.max(i - 1, 0));
        setIsAnimating(false);
      }, 200);
    }
  }, [currentIndex]);

  const handleSelect = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
      if (currentIndex < shuffled.length - 1) {
        setTimeout(() => goToNext(), 300);
      }
    },
    [question.id, currentIndex, shuffled.length, goToNext]
  );

  const handleSubmit = () => {
    onComplete(answers);
  };

  return (
    <div className="min-h-dvh flex flex-col" style={{ background: "#F8FAFC" }}>
      {/* Header */}
      <div className="sticky top-0 z-20 px-4 lg:px-8 pt-4 lg:pt-6 pb-3 lg:pb-4" style={{ background: "#F8FAFC" }}>
        <div className="max-w-lg lg:max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs lg:text-sm font-medium" style={{ color: "#64748B" }}>
              {safeIndex + 1} / {shuffled.length}
            </span>
            <span className="text-xs lg:text-sm font-medium" style={{ color: ACCENT_COLOR }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 lg:h-3 rounded-full overflow-hidden" style={{ background: "#E2E8F0" }}>
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #2563EB, #7C3AED)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 lg:px-8 pb-8 lg:pb-12">
        <div className="w-full max-w-lg lg:max-w-2xl">
          {/* Question text */}
          <div
            className={`transition-all duration-200 ${
              isAnimating
                ? direction === "next"
                  ? "opacity-0 translate-x-8"
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-center leading-relaxed mb-10 lg:mb-14" style={{ color: "#1E293B" }}>
              {question.text}
            </p>
          </div>

          {/* Scale buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-5 mb-8 lg:mb-12">
            {scaleLabels.map(({ value, label }) => {
              const isSelected = selectedValue === value;
              return (
                <button
                  key={value}
                  onClick={() => handleSelect(value)}
                  className={`cursor-pointer flex flex-col items-center justify-center rounded-2xl transition-all duration-200 active:scale-95 quiz-scale-btn ${
                    isSelected ? "shadow-lg scale-105" : "hover:scale-105"
                  }`}
                  style={{
                    background: isSelected ? ACCENT_COLOR : "white",
                    color: isSelected ? "white" : "#64748B",
                    border: isSelected ? "none" : "2px solid #E2E8F0",
                  }}
                >
                  <span className="text-lg lg:text-2xl font-bold">{value}</span>
                  <span className="text-[10px] lg:text-xs leading-tight whitespace-pre-line mt-0.5">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrev}
              disabled={safeIndex === 0}
              className="cursor-pointer flex items-center gap-1 px-4 py-2 lg:px-6 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ color: "#64748B" }}
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              이전
            </button>

            {isLastQuestion && selectedValue ? (
              <button
                onClick={handleSubmit}
                className="cursor-pointer px-8 py-3 lg:px-12 lg:py-4 rounded-2xl text-white font-bold text-sm lg:text-base shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
              >
                결과 보기
              </button>
            ) : (
              <button
                onClick={goToNext}
                disabled={!selectedValue || isLastQuestion}
                className="cursor-pointer flex items-center gap-1 px-4 py-2 lg:px-6 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ color: ACCENT_COLOR }}
              >
                다음
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
