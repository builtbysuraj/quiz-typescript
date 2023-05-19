import { useState, useEffect } from "react";
import Timer from "./Timer";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
};

export default function QuizHeader({ timer, setTimer, handleNext }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  useEffect(() => {
    if (timer === 30) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [timer]);

  return (
    <section className="top">
      <p className="total-questions">Question {currentQuestion}/4</p>
      <p className="question-title">What will be answer of this question?</p>
      <div className="timer">
        <Timer timer={timer} setTimer={setTimer} handleNext={handleNext} />
      </div>
    </section>
  );
}
