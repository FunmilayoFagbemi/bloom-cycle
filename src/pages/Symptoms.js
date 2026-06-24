import "../styles/Symptoms.css";

function Symptoms() {
  return (
    <div className="page">
      <h1>Symptoms You May Experience</h1>
      <p>
        Common experiences during perimenopause and menopause. Every journey is
        different.
      </p>
      <div className="symptom-grid">
        <div className="symptom-card">🔥 Hot flushes</div>
        <div className="symptom-card">🌙 Night sweats</div>
        <div className="symptom-card">😴 Sleep disruption</div>
        <div className="symptom-card">🧠 Brain fog</div>
        <div className="symptom-card">💭 Mood changes</div>
        <div className="symptom-card">🌸 Body changes</div>
      </div>
    </div>
  );
}

export default Symptoms;
