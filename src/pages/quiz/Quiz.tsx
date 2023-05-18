import { useState } from "react";
import "./Quiz.scss";
import Question from "../../components/Question";
import QuizHeader from "../../components/QuizHeader";
import data from "../../data/questions.json";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [score, setScore] = useState<number>(0);
  const Data = data.questions;
  const currentQuestion = Data[currentQuestionIndex];

  // "Next" button click
  const handleNextQuestion = () => {
    if (currentQuestionIndex < Data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    }
  };

  return (
    <main className="quiz-container">
      <div className="quiz-wrapper">
        <QuizHeader timer={timer} setTimer={setTimer} />
        <Question
          question={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          score={score}
          setScore={setScore}
        />
      </div>
    </main>
  );
}
