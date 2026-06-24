import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1>Bloom Cycle</h1>

      <p>
        A modern wellness dashboard designed to help women better understand
        perimenopause, menopause, and their personal journey through hormonal
        change.
      </p>

      <h2>Explore</h2>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/symptoms")}>
          <h3>Symptoms</h3>
          <p>Understand common physical and emotional symptoms.</p>
        </div>

        <div className="card" onClick={() => navigate("/perimenopause")}>
          <h3>Perimenopause</h3>
          <p>Learn what happens before menopause begins.</p>
        </div>

        <div className="card" onClick={() => navigate("/menopause")}>
          <h3>Menopause</h3>
          <p>Understand the menopause transition and what to expect.</p>
        </div>

        <div className="card" onClick={() => navigate("/my-journey")}>
          <h3>My Bloom Journey</h3>
          <p>Read my personal experience navigating perimenopause.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
