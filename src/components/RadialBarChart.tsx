"use client";

import { type IntelligenceType, intelligenceMap } from "@/data/questions";

interface RadialBarChartProps {
  scores: Record<IntelligenceType, number>;
}

export default function RadialBarChart({ scores }: RadialBarChartProps) {
  const entries = (Object.entries(scores) as [IntelligenceType, number][]).sort(
    (a, b) => b[1] - a[1]
  );

  const maxScore = 35; // 7 questions * 5 max
  const size = 360;
  const center = size / 2;
  const ringWidth = 16;
  const gap = 4;
  const startRadius = 50;

  return (
    <div className="flex justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[360px]"
        role="img"
        aria-label="다중지능 원형 바 차트"
      >
        {entries.map(([key, score], index) => {
          const info = intelligenceMap[key];
          const radius = startRadius + index * (ringWidth + gap);
          const circumference = 2 * Math.PI * radius;
          const ratio = score / maxScore;
          const arcLength = circumference * ratio;
          const rotation = -90; // Start from top

          return (
            <g key={key}>
              {/* Background track */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth={ringWidth}
                opacity={0.5}
              />
              {/* Filled arc */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={info.color}
                strokeWidth={ringWidth}
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeLinecap="round"
                transform={`rotate(${rotation} ${center} ${center})`}
                style={{
                  animation: `radialFill 1s ease-out ${index * 0.1}s both`,
                }}
              />
              {/* Label at end of bar */}
              <text
                x={center + radius + ringWidth / 2 + 6}
                y={center}
                textAnchor="start"
                dominantBaseline="middle"
                fill={info.color}
                fontWeight="600"
                fontSize="10"
              >
                {info.label.replace(" 지능", "")}
              </text>
            </g>
          );
        })}

        {/* Center score */}
        <text
          x={center}
          y={center - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1E293B"
          fontWeight="700"
          fontSize="20"
        >
          {entries[0][1]}점
        </text>
        <text
          x={center}
          y={center + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#64748B"
          fontWeight="500"
          fontSize="10"
        >
          {intelligenceMap[entries[0][0]].label}
        </text>

        <style>{`
          @keyframes radialFill {
            from {
              stroke-dasharray: 0 9999;
            }
          }
        `}</style>
      </svg>
    </div>
  );
}
