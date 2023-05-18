import { useState } from "react";
import { useNavigate } from "react-router-dom";

type OptionData = {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean;
};

type QuestionData = {
  id: number;
  text: string;
  options: OptionData[];
};

type Props = {
  question: QuestionData;
  handleNextQuestion: () => void;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Question({
  handleNextQuestion,
  question,
  score,
  setScore,
}: Props) {
  const navigate = useNavigate();
  const { text, options } = question;
  const [activeOption, setActiveOption] = useState<number | null>(null);

  // Option click function
  const handleOptionClick = (option: OptionData) => {
    setActiveOption(option.id);
    if (option.isCorrect) setScore((prev) => prev + 1);
  };

  // "Next" button click
  const handleNext = () => {
    setActiveOption(null);
    handleNextQuestion();
  };

  // console.log(score);
  return (
    <div className="bottom">
      <div>
        <div className="question">{text}</div>
      </div>
      <div className="options">
        {options?.map((option) => {
          return (
            <ul key={option.id}>
              <li
                onClick={() => handleOptionClick(option)}
                className={activeOption === option.id ? "active" : ""}
              >
                <span>{option.label}</span>
                {option.text}
              </li>
            </ul>
          );
        })}
      </div>
      <div className="btn-wrapper">
        <button disabled={activeOption === null} onClick={handleNext}>Next</button>
      </div>
      <button onClick={() => navigate("/result")}>Result</button>
    </div>
  );
}
