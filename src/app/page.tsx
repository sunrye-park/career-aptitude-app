"use client";

import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";

type Screen = "intro" | "quiz" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setScreen("quiz");
    window.scrollTo(0, 0);
  };

  const handleComplete = (finalAnswers: Record<number, number>) => {
    setAnswers(finalAnswers);
    setScreen("result");
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setAnswers({});
    setScreen("intro");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      {screen === "intro" && <IntroScreen onStart={handleStart} />}
      {screen === "quiz" && <QuizScreen onComplete={handleComplete} />}
      {screen === "result" && (
        <ResultScreen answers={answers} onRestart={handleRestart} />
      )}
    </main>
  );
}
