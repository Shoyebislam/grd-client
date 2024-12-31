
import React, { useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", 
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/register", formData);
      setMessage("Registration successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error during registration");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="researcher">Researcher</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "#007BFF" }}>
          Log in
        </a>
      </p>
    </div>
  );
};
  
    
  

export default App
