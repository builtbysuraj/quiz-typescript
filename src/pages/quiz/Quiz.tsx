import { useNavigate } from "react-router-dom";
import "./Quiz.scss";

export default function Quiz() {
  const navigate = useNavigate();
  return (
    <main className="quiz-container">
      <div className="quiz-wrapper">
        <div className="top">
          <p className="total-questions">Question 1/4</p>
          <p className="question-title">
            What will be answer of this question?
          </p>
          <div className="timer">0.54</div>
        </div>
        <div className="bottom">
          <div>
            <div className="question">8 / 2(2+2)</div>
          </div>
          <div className="options">
            <ul>
              <li>
                <span>A</span> first
              </li>
              <li>
                <span>B</span> second
              </li>
              <li className="active">
                <span>C</span> third
              </li>
              <li>
                <span>D</span> fourth
              </li>
            </ul>
          </div>
          <div className="btn-wrapper">
            <button disabled>Next</button>
          </div>
          <button onClick={() => navigate("/result")}>Result</button>
        </div>
      </div>
    </main>
  );
}
