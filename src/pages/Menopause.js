import "../styles/Pages.css";

function Menopause() {
  return (
    <div className="page">
      <h1>Menopause</h1>
      <p>
        Menopause is a natural stage in life when menstrual cycles stop. It can
        bring physical, emotional, and hormonal changes.
      </p>

      <div className="card-grid">
        <div className="card-item">
          <h3>What it is </h3>
          <p>A natural transition marking the end of menstrual cycles.</p>
          <div className="card-item">
            <h3>Common changes</h3>
            <p>
              Hot flushes, mood shifts, sleep changes, and energy fluctuations.
            </p>
            <div className="card-item">
              <h3>Support</h3>
              <p>
                Lifestyle changes, medical advice, and emotional awareness help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menopause;
