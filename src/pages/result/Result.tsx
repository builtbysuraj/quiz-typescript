import "./Result.scss";

export default function Result() {
  return (
    <div className="result-container">
      <div className="result-wrapper">
        <div className="score">
          <h2>Your Score</h2>
          <div>3/4</div>
        </div>
        <div className="time">
          <h2>Time Taken</h2>
          <div>3 min</div>
        </div>
      </div>
    </div>
  );
}
