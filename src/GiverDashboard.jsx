import { useNavigate } from "react-router-dom";

function GiverDashboard() {
  const navigate = useNavigate();
  const therapyTakers = ["Taker1", "Taker2", "Taker3"]; // Mock list of connected Therapy Takers

  const startSession = (taker) => {
    console.log(`Starting session with ${taker}`);
    navigate("/real-time-session", { state: { partner: taker } });
  };

  return (
    <div className="dashboard-container">
      <h2>Therapy Giver Dashboard</h2>
      <h3>Connected Therapy Takers:</h3>
      <ul>
        {therapyTakers.map((taker, index) => (
          <li key={index}>
            {taker} <button onClick={() => startSession(taker)}>Start Session</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GiverDashboard;
