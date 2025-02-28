import { useNavigate } from "react-router-dom";

function TakerDashboard() {
  const navigate = useNavigate();
  const therapyGivers = ["Giver1", "Giver2", "Giver3"]; // Mock list of connected Therapy Givers

  const joinSession = (giver) => {
    console.log(`Joining session with ${giver}`);
    navigate("/real-time-session", { state: { partner: giver } });
  };

  return (
    <div className="dashboard-container">
      <h2>Therapy Taker Dashboard</h2>
      <h3>Available Therapy Givers:</h3>
      <ul>
        {therapyGivers.map((giver, index) => (
          <li key={index}>
            {giver} <button onClick={() => joinSession(giver)}>Join Session</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TakerDashboard;
