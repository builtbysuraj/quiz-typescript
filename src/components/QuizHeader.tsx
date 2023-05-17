import Timer from "./Timer";

export default function QuizHeader() {
  return (
    <div>
      <div className="top">
        <p className="total-questions">Question 1/4</p>
        <p className="question-title">What will be answer of this question?</p>
        <div className="timer">
          <Timer />
        </div>
      </div>
    </div>
  );
}
