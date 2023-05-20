import { useEffect, useState } from "react";
import "./Quiz.scss";
import Question from "../../components/Question";
import QuizHeader from "../../components/QuizHeader";
import data from "../../data/questions.json";
import { useNavigate } from "react-router-dom";

type Props = {
  score: number;
  startTime: Date | null;
  setStartTime: React.Dispatch<React.SetStateAction<Date | null>>;
  setTotalTime: React.Dispatch<React.SetStateAction<number | null>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Quiz({
  score,
  startTime,
  setStartTime,
  setTotalTime,
  setScore,
}: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [activeOption, setActiveOption] = useState<number | null>(null);

  const navigate = useNavigate();

  const Data = data.questions;
  const currentQuestion = Data[currentQuestionIndex];

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  // handling next question and moving to result page
  const handleNextQuestion = () => {
    if (currentQuestionIndex < Data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    } else {
      if (startTime) {
        const endTime = new Date();
        const totalTimeInSeconds =
          (endTime.getTime() - startTime.getTime()) / 1000;
        setTotalTime(totalTimeInSeconds);
      }
      navigate("/result");
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
