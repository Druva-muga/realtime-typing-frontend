import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import GiverDashboard from "./GiverDashboard.jsx";
import TakerDashboard from "./TakerDashboard";
import RealTimeSession from "./RealTimeSession";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/giver-dashboard" element={<GiverDashboard />} />
        <Route path="/taker-dashboard" element={<TakerDashboard />} />
        <Route path="/real-time-session" element={<RealTimeSession />} />
      </Routes>
    </Router>
  );
}

export default App;
