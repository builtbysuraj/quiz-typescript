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
};

export default function Question({ handleNextQuestion, question }: Props) {
  const navigate = useNavigate();
  const { id, text, options } = question;
  return (
    <div className="bottom">
      <div>
        <div className="question">{text}</div>
      </div>
      <div className="options">
        {options?.map((e) => {
          return (
            <ul key={e.id}>
              <li>
                <span>{e.label}</span>
                {e.text}
              </li>
            </ul>
          );
        })}
      </div>
      <div className="btn-wrapper">
        <button onClick={handleNextQuestion}>Next</button>
      </div>
      <button onClick={() => navigate("/result")}>Result</button>
    </div>
  );
}
