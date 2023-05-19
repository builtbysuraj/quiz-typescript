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
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  activeOption: number | null;
  setActiveOption: React.Dispatch<React.SetStateAction<number | null>>;
  handleNext: () => void;
};

export default function Question({
  question,
  score,
  setScore,
  activeOption,
  setActiveOption,
  handleNext,
}: Props) {
  const navigate = useNavigate();
  const { text, options } = question;

  // Option click function
  const handleOptionClick = (option: OptionData) => {
    setActiveOption(option.id);
    if (option.isCorrect) setScore((prev) => prev + 1);
  };

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
        <button disabled={activeOption === null} onClick={handleNext}>
          Next
        </button>
      </div>
      <button onClick={() => navigate("/result")}>Result</button>
    </div>
  );
}
