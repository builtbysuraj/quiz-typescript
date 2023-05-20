import "./Result.scss";
import result from "../../assets/result.svg";

type Props = {
  totalTime: number | null;
  score: number;
};

export default function Result({ totalTime, score }: Props) {
  return (
    <div className="result-container">
      <div className="result-wrapper">
        <div className="score">
          <h2>Your Score</h2>
          <div>{score && <span>{score}</span>}/4</div>
        </div>
        <div className="time">
          <h2>Time Taken</h2>
          <div>{totalTime && <span>{totalTime}</span>} seconds</div>
        </div>
      <img src={result} alt="result-image" />
      </div>
    </div>
  );
}
