"use client";

import { type IntelligenceType, intelligenceMap } from "@/data/questions";

interface BubbleChartProps {
  scores: Record<IntelligenceType, number>;
}

interface BubbleData {
  key: IntelligenceType;
  score: number;
  radius: number;
  x: number;
  y: number;
}

function packBubbles(scores: Record<IntelligenceType, number>, containerSize: number): BubbleData[] {
  const entries = Object.entries(scores) as [IntelligenceType, number][];
  // Sort by score descending for visual hierarchy
  entries.sort((a, b) => b[1] - a[1]);

  const maxScore = Math.max(...entries.map(([, s]) => s));
  const minRadius = containerSize * 0.06;
  const maxRadius = containerSize * 0.16;

  const bubbles: BubbleData[] = entries.map(([key, score]) => {
    const ratio = score / maxScore;
    const radius = minRadius + (maxRadius - minRadius) * ratio;
    return { key, score, radius, x: containerSize / 2, y: containerSize / 2 };
  });

  // Simple force-directed placement
  const center = containerSize / 2;
  const angleStep = (2 * Math.PI) / bubbles.length;

  // Initial placement in a circle
  bubbles.forEach((b, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const dist = containerSize * 0.22;
    b.x = center + Math.cos(angle) * dist;
    b.y = center + Math.sin(angle) * dist;
  });

  // Push largest bubble to center
  bubbles[0].x = center;
  bubbles[0].y = center;

  // Simple collision resolution (multiple passes)
  for (let iter = 0; iter < 100; iter++) {
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const dx = bubbles[j].x - bubbles[i].x;
        const dy = bubbles[j].y - bubbles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = bubbles[i].radius + bubbles[j].radius + 4;

        if (dist < minDist && dist > 0) {
          const overlap = (minDist - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;
          bubbles[i].x -= nx * overlap;
          bubbles[i].y -= ny * overlap;
          bubbles[j].x += nx * overlap;
          bubbles[j].y += ny * overlap;
        }
      }

      // Keep in bounds
      const padding = 8;
      bubbles[i].x = Math.max(bubbles[i].radius + padding, Math.min(containerSize - bubbles[i].radius - padding, bubbles[i].x));
      bubbles[i].y = Math.max(bubbles[i].radius + padding, Math.min(containerSize - bubbles[i].radius - padding, bubbles[i].y));
    }
  }

  return bubbles;
}

export default function BubbleChart({ scores }: BubbleChartProps) {
  const size = 360;
  const bubbles = packBubbles(scores, size);

  return (
    <div className="flex justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[360px] lg:max-w-[520px]"
        role="img"
        aria-label="다중지능 버블 차트"
      >
        {bubbles.map((bubble, index) => {
          const info = intelligenceMap[bubble.key];
          const maxScore = Math.max(...Object.values(scores));
          const ratio = bubble.score / maxScore;
          const fontSize = Math.max(9, bubble.radius * 0.28);
          const scoreFontSize = Math.max(14, bubble.radius * 0.4);

          return (
            <g
              key={bubble.key}
              style={{
                animation: `bubbleIn 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Glow */}
              <circle
                cx={bubble.x}
                cy={bubble.y}
                r={bubble.radius + 4}
                fill={info.color}
                opacity={0.15}
              />
              {/* Main bubble */}
              <circle
                cx={bubble.x}
                cy={bubble.y}
                r={bubble.radius}
                fill={info.color}
                opacity={0.15 + 0.75 * ratio}
              />
              {/* Score */}
              <text
                x={bubble.x}
                y={bubble.y - fontSize * 0.3}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontWeight="700"
                fontSize={scoreFontSize}
              >
                {bubble.score}
              </text>
              {/* Label */}
              <text
                x={bubble.x}
                y={bubble.y + scoreFontSize * 0.6}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontWeight="500"
                fontSize={fontSize}
                opacity={0.9}
              >
                {info.label.replace(" 지능", "")}
              </text>
            </g>
          );
        })}

        <style>{`
          @keyframes bubbleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </svg>
    </div>
  );
}
