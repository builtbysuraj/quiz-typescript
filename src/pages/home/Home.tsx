import { useNavigate } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home-container">
      <div className="home-wrapper">
        <h1>Quiz App</h1>
        <p>
          This is a math quiz where you will be given a set of questions to
          solve. You will have 30 seconds to answer each question. Once you have
          completed all the questions, you will be able to see your results.
        </p>
        <div className="btn-wrapper">
          <button onClick={() => navigate("/quiz")}>Take Quiz</button>
        </div>
        <button onClick={() => navigate("/result")}>Result</button>
      </div>
    </main>
  );
}
