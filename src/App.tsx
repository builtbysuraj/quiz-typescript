import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import { useState } from "react";

export default function App() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              startTime={startTime}
              setStartTime={setStartTime}
              setTotalTime={setTotalTime}
              setScore={setScore}
              score={score}
            />
          }
        />
        <Route path="/result" element={<Result totalTime={totalTime} score={score} />} />
      </Routes>
    </BrowserRouter>
  );
}
