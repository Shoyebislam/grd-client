import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Researcher"); // Default role is "Researcher"
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
        role,
      });

      if (response.data.message === "Login successful") {
        if (role === "Admin") {
          navigate("/admin_dashboard");
        } else if (role === "Researcher") {
          navigate("/researcher_dashboard");
        }
      } else {
        setError("Invalid credentials or user not found");
      }
    } catch (err) {
      setError("An error occurred while logging in");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="Admin">Admin</option>
            <option value="Researcher">Researcher</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <a href="/register" style={{ color: "#007BFF" }}>
          Register Here
        </a>
      </p>
    </div>
  );
};

export default Login;
