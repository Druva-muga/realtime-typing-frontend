import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("giver");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication logic
    if (username && password) {
      role === "giver"
        ? navigate("/giver-dashboard")
        : navigate("/taker-dashboard");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            value="giver"
            checked={role === "giver"}
            onChange={() => setRole("giver")}
          />
          Therapy Giver
        </label>
        <label>
          <input
            type="radio"
            value="taker"
            checked={role === "taker"}
            onChange={() => setRole("taker")}
          />
          Therapy Taker
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
