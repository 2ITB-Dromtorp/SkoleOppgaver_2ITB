import React, { useState } from "react";
import './Login.css'; // Assuming you named your CSS file Login.css

export default function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted');
    // Add your login logic here
  }

  return (
    <div className="Login-container">
      <h1 className="Login-header">Logg inn skjema</h1>

      <form className="Login-form" onSubmit={handleSubmit}>
        <label className="Login-label">Brukernavn</label>
        <input
          type="text"
          className="Login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="Login-label">Passord</label>
        <input
          type="password"
          className="Login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          className="Login-submit"
          value="Log in"
        />
      </form>
    </div>
  );
}
