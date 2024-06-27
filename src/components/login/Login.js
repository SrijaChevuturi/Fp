import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', formDetails.email);
    localStorage.setItem('password', formDetails.password);
    navigate('/home');
  };

  return (
    <div className="register-container flex-center">
      <h2 className="form-heading">Login</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
          value={formDetails.email}
          onChange={inputChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Enter your password"
          value={formDetails.password}
          onChange={inputChange}
          required
        />
        <button type="submit" className="lbtn form-btn">
          Submit
        </button>
      </form>
      <p className="link mt-3 fs-5">
        New user?{' '}
        <NavLink className="login-link" to={'/register'}>
          Register
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
