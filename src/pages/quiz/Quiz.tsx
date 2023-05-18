import { useState } from "react";
import "./Quiz.scss";
import Question from "../../components/Question";
import QuizHeader from "../../components/QuizHeader";
import data from "../../data/questions.json";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [score, setScore] = useState<number>(0);
  const [activeOption, setActiveOption] = useState<number | null>(null);

  const Data = data.questions;
  const currentQuestion = Data[currentQuestionIndex];

  // "Next" button click
  const handleNextQuestion = () => {
    if (currentQuestionIndex < Data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    }
  };
  // "Next" button click
  const handleNext = () => {
    setActiveOption(null);
    handleNextQuestion();
  };

  return (
    <main className="quiz-container">
      <section className="quiz-wrapper">
        <QuizHeader timer={timer} setTimer={setTimer} handleNext={handleNext} />
        <Question
          question={currentQuestion}
          score={score}
          setScore={setScore}
          activeOption={activeOption}
          handleNext={handleNext}
          setActiveOption={setActiveOption}
        />
      </section>
    </main>
  );
}
