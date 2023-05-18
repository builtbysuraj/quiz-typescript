import Timer from "./Timer";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
};

export default function QuizHeader({ timer, setTimer, handleNext }: Props) {
  return (
    <section className="top">
      <p className="total-questions">Question 1/4</p>
      <p className="question-title">What will be answer of this question?</p>
      <div className="timer">
        <Timer timer={timer} setTimer={setTimer} handleNext={handleNext} />
      </div>
    </section>
  );
}
