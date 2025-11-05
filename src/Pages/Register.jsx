import React, { useState } from 'react';
import Login from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import "../Register.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const  handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://food-app-server-wwa1.onrender.com/api/v1/auth/register', {
        email,
        username,
        password,
      });

      alert(response.data.message);
      setError('');
      navigate('/Login');      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-outer">
      <div className="register-lottie-left">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_tll0j4bb.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="register-form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="register-form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="register-form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="register-error-message">{error}</p>}

          <button type="submit">Register</button>
        </form>

       
      </div>
    </div>
  );
};

export default Register;
