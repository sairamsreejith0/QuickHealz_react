import React, { useState } from 'react';
import './Login_style.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');

  const patientRegister = (e) => {
    // window.location.href = "http://localhost:3000/PatientRegistrationForm";
    navigate('PatientRegistrationForm')
  }
  const doctorRegister = (e) => {
    window.location.href = "http://localhost:3000/DoctorRegistrationForm";
  }
  const caretakerRegister = (e) =>{
    window.location.href = "http://localhost:3000/CaretakerRegistrationForm"
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
const data = {
  email: email,
  password: password,
  userType : userType
};
    
    axios.post('http://127.0.0.1:8000/login/',data
  
  ).then(response => {
      // Handle successful response
      if(response.data)
      { 
        localStorage.setItem('userData',email);
       
      }
        if(userType=="patient")
        window.location.href="http://localhost:3000/PatientDashboard";
        else if(userType=="doctor")
        window.location.href="http://localhost:3000/DoctorDashboard";
        else
        window.location.href="http://localhost:3000/CaretakerDashboard"
       
      // Redirect to dashboard or perform other actions on successful login
    })
    .catch(error => {
      // Handle error response
      console.error(error);
      // Show error message or perform other actions on failed login
    });
  };

  
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
         
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userType">Login As</label>
          <select
            className="form-control"
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="careTaker">Care Taker</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        </form>
        <p>
        Don't have an account?{' '}

      </p>
        <button className="btn btn-primary" onClick={patientRegister}>
          Patient Registration
        </button>
        <button className="btn btn-primary" onClick={doctorRegister}>
          Doctor Registration
        </button>
        <button className="btn btn-primary" onClick={caretakerRegister}>
          Caretaker Registration
        </button>
     
      
    </div>
  );
}

export default Login;
