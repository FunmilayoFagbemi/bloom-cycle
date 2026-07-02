import "../styles/Pages.css";

function Perimenopause() {
  return (
    <div classNmae="page">
      <h1>Perimenopause</h1>
      <p>
        Perimenopause is the transition phase before menopause begins. Hormones
        start to fluctuate, and symptoms may appear gradually.
      </p>

      <div className="card-grid">
        <div className="card-item">
          <h3>What is happening</h3>
          <p>
            Hormone levels (especially estrogen) begin to rise and fall
            unpredictably.
          </p>

          <div className="card-item">
            <h3>Common signs</h3>
            <p>
              Irregular periods, mood changes, sleep disruption, and fatigue.
            </p>
          </div>

          <div className="card-item">
            <h3>What helps</h3>
            <p>
              Lifestyle changes, tracking symptoms, nutrition, and medical
              guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perimenopause;
