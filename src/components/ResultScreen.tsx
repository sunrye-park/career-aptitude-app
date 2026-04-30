"use client";

import { useState, useRef, useCallback } from "react";
import { type IntelligenceType, intelligenceMap, questions } from "@/data/questions";
import { getMixCareer } from "@/data/mixCareers";
import BubbleChart from "./BubbleChart";
import RadialBarChart from "./RadialBarChart";
import { toPng } from "html-to-image";

interface ResultScreenProps {
  answers: Record<number, number>;
  onRestart: () => void;
}

type ChartType = "bubble" | "radial";

function calculateScores(answers: Record<number, number>): Record<IntelligenceType, number> {
  const scores: Record<string, number> = {};
  for (const q of questions) {
    if (!scores[q.intelligence]) scores[q.intelligence] = 0;
    scores[q.intelligence] += answers[q.id] || 0;
  }
  return scores as Record<IntelligenceType, number>;
}

export default function ResultScreen({ answers, onRestart }: ResultScreenProps) {
  const [chartType, setChartType] = useState<ChartType>("bubble");
  const [isSaving, setIsSaving] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const scores = calculateScores(answers);
  const sortedEntries = (Object.entries(scores) as [IntelligenceType, number][]).sort(
    (a, b) => b[1] - a[1]
  );
  const topThree = sortedEntries.slice(0, 3);
  const mixCareer = getMixCareer(topThree[0][0], topThree[1][0], topThree[2][0]);

  const handleSave = useCallback(async () => {
    if (!resultRef.current || isSaving) return;
    setIsSaving(true);
    try {
      const dataUrl = await toPng(resultRef.current, {
        backgroundColor: "#F8FAFC",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = "다중지능_진단결과.png";
      link.href = dataUrl;
      link.click();
    } catch {
      alert("이미지 저장에 실패했습니다. 스크린샷을 이용해주세요.");
    } finally {
      setIsSaving(false);
    }
  }, [isSaving]);

  return (
    <div className="min-h-dvh py-8 px-4" style={{ background: "#F8FAFC" }}>
      <div className="max-w-lg mx-auto">
        {/* Saveable area */}
        <div ref={resultRef} className="pb-6" style={{ background: "#F8FAFC" }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: "#1E293B" }}>
              나의 다중지능 프로필
            </h2>
            <p className="text-sm" style={{ color: "#64748B" }}>
              가드너 다중지능 이론 기반 진단 결과
            </p>
          </div>

          {/* Chart toggle */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex rounded-xl p-1"
              style={{ background: "#E2E8F0" }}
            >
              <button
                onClick={() => setChartType("bubble")}
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  chartType === "bubble"
                    ? "bg-white shadow-sm"
                    : ""
                }`}
                style={{
                  color: chartType === "bubble" ? "#1E293B" : "#64748B",
                }}
              >
                버블 차트
              </button>
              <button
                onClick={() => setChartType("radial")}
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  chartType === "radial"
                    ? "bg-white shadow-sm"
                    : ""
                }`}
                style={{
                  color: chartType === "radial" ? "#1E293B" : "#64748B",
                }}
              >
                원형 바 차트
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-8">
            {chartType === "bubble" ? (
              <BubbleChart scores={scores} />
            ) : (
              <RadialBarChart scores={scores} />
            )}
          </div>

          {/* Score ranking */}
          <div className="space-y-3 mb-8">
            {sortedEntries.map(([key, score], index) => {
              const info = intelligenceMap[key];
              const maxScore = 35;
              const percentage = (score / maxScore) * 100;
              const isTop = index < 3;

              return (
                <div
                  key={key}
                  className={`rounded-2xl p-4 transition-all duration-200 ${
                    isTop ? "shadow-sm" : ""
                  }`}
                  style={{
                    background: isTop ? "white" : "transparent",
                    border: isTop ? "1px solid #E2E8F0" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isTop && (
                        <span
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: info.color }}
                        >
                          {index + 1}
                        </span>
                      )}
                      <span
                        className={`font-medium ${isTop ? "text-sm" : "text-xs"}`}
                        style={{ color: isTop ? "#1E293B" : "#64748B" }}
                      >
                        {info.label}
                      </span>
                    </div>
                    <span
                      className="font-bold text-sm"
                      style={{ color: info.color }}
                    >
                      {score}점
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "#E2E8F0" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: info.color,
                        opacity: isTop ? 1 : 0.5,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Top 3 descriptions */}
          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold" style={{ color: "#1E293B" }}>
              나의 강점 TOP 3
            </h3>
            {topThree.map(([key], index) => {
              const info = intelligenceMap[key];
              const detailLabels = [
                { key: "core" as const, label: "핵심 특성" },
                { key: "learningStyle" as const, label: "학습 스타일" },
                { key: "strength" as const, label: "강점" },
                { key: "dailyLife" as const, label: "일상 속 모습" },
              ];
              return (
                <div
                  key={key}
                  className="rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    background: "white",
                    borderLeft: `4px solid ${info.color}`,
                  }}
                >
                  {/* Header */}
                  <div className="p-5 pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: info.color }}
                      >
                        {index + 1}
                      </span>
                      <h4 className="font-bold text-base lg:text-lg" style={{ color: "#1E293B" }}>
                        {info.label}
                      </h4>
                    </div>
                    <p className="text-sm lg:text-base font-medium leading-relaxed" style={{ color: info.color }}>
                      {info.summary}
                    </p>
                  </div>

                  {/* Detail sections */}
                  <div className="px-5 pb-4 space-y-3">
                    {detailLabels.map(({ key: dk, label }) => (
                      <div key={dk}>
                        <span
                          className="inline-block text-xs font-bold mb-1 px-2 py-0.5 rounded"
                          style={{ backgroundColor: `${info.color}12`, color: info.color }}
                        >
                          {label}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                          {info.detail[dk]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Careers */}
                  <div className="px-5 pb-4">
                    <span
                      className="inline-block text-xs font-bold mb-2 px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${info.color}12`, color: info.color }}
                    >
                      추천 직업
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {info.careers.map((career) => (
                        <span
                          key={career}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: `${info.color}15`,
                            color: info.color,
                          }}
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Representatives */}
                  <div className="px-5 pb-5">
                    <span
                      className="inline-block text-xs font-bold mb-2 px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${info.color}12`, color: info.color }}
                    >
                      이 지능이 강한 유명인
                    </span>
                    <div className="space-y-2">
                      {info.representatives.map((rep) => (
                        <div key={rep.name} className="flex gap-2">
                          <span
                            className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                            style={{ backgroundColor: info.color }}
                          />
                          <div>
                            <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                              {rep.name}
                            </span>
                            <span className="text-xs ml-1" style={{ color: "#94A3B8" }}>
                              {rep.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] mt-2" style={{ color: "#CBD5E1" }}>
                      * 업적과 활동 기반 추정이며, 공식 검사 결과가 아닙니다.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mix Career Analysis */}
          {mixCareer && (
            <div className="mt-8">
              <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#1E293B" }}>
                나의 강점 믹스 분석
              </h3>
              <div
                className="rounded-2xl overflow-hidden shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #2563EB08, #7C3AED08)",
                  border: "1px solid #E2E8F0",
                }}
              >
                {/* Mix title */}
                <div className="p-5 pb-3">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {topThree.map(([key]) => {
                      const info = intelligenceMap[key];
                      return (
                        <span
                          key={key}
                          className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: info.color }}
                        >
                          {info.label}
                        </span>
                      );
                    })}
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold mb-1" style={{ color: "#1E293B" }}>
                    {mixCareer.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {mixCareer.description}
                  </p>
                </div>

                {/* Shining moment */}
                {mixCareer.shiningMoment && (
                  <div className="px-5 pb-3">
                    <span
                      className="inline-block text-xs font-bold mb-1.5 px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#7C3AED12", color: "#7C3AED" }}
                    >
                      이 조합이 빛나는 순간
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                      {mixCareer.shiningMoment}
                    </p>
                  </div>
                )}

                {/* Mix recommended careers */}
                <div className="px-5 pb-5">
                  <span
                    className="inline-block text-xs font-bold mb-2 px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#2563EB12", color: "#2563EB" }}
                  >
                    이 조합에 딱 맞는 직업
                  </span>
                  <div className="space-y-2 mt-1">
                    {mixCareer.careers.map((career) => (
                      <div key={career.name} className="flex gap-2">
                        <span
                          className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                          style={{ backgroundColor: "#2563EB" }}
                        />
                        <div>
                          <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                            {career.name}
                          </span>
                          {career.reason && (
                            <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                              {career.reason}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="cursor-pointer flex-1 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
          >
            {isSaving ? "저장 중..." : "이미지로 저장"}
          </button>
          <button
            onClick={onRestart}
            className="cursor-pointer flex-1 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            style={{
              color: "#64748B",
              border: "2px solid #E2E8F0",
              background: "white",
            }}
          >
            다시 하기
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: "#94A3B8" }}>
          이 진단은 가드너의 다중지능 이론을 참고하여 제작되었습니다.
          <br />
          전문적인 심리검사를 대체하지 않습니다.
        </p>
      </div>
    </div>
  );
}
