import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Bloom Cycle</h1>

        <p>
          Understanding perimenopause and menopause with confidence, clarity,
          and community.
        </p>
      </div>

      <h2>Explore</h2>

      <div className="card-container">
        <div className="card symptoms" onClick={() => navigate("/symptoms")}>
          <span className="icon">🌡️</span>
          <h3>Symptoms</h3>
          <p>Understand common physical and emotional symptoms.</p>
        </div>

        <div
          className="card perimenopause"
          onClick={() => navigate("/perimenopause")}
        >
          <span className="icon">🌿</span>
          <h3>Perimenopause</h3>
          <p>Learn what happens before menopause begins.</p>
        </div>

        <div className="card menopause" onClick={() => navigate("/menopause")}>
          <span className="icon">🌙</span>
          <h3>Menopause</h3>
          <p>Understand the menopause transition and what to expect.</p>
        </div>

        <div className="card journey" onClick={() => navigate("/my-journey")}>
          <span className="icon">🌸</span>
          <h3>My Bloom Journey</h3>
          <p>Read my personal experience navigating perimenopause.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
