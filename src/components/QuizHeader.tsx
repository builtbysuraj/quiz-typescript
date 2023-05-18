import Timer from "./Timer";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuizHeader({ timer, setTimer }: Props) {
  return (
    <div>
      <div className="top">
        <p className="total-questions">Question 1/4</p>
        <p className="question-title">What will be answer of this question?</p>
        <div className="timer">
          <Timer timer={timer} setTimer={setTimer} />
        </div>
      </div>
    </div>
  );
}
