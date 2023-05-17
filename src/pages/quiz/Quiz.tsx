import { useState } from "react";
import "./Quiz.scss";
import Question from "../../components/Question";
import QuizHeader from "../../components/QuizHeader";
import data from "../../data/questions.json";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const Data = data.questions;
  const currentQuestion = Data[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < Data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <main className="quiz-container">
      <div className="quiz-wrapper">
        <QuizHeader />
        <Question
          question={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </main>
  );
}
