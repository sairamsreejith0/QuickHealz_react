
import React, { useState } from 'react';
import axios from 'axios';

import "../Doctor_styles/DoctorRegister.css";

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    email: '',
    address: '',
    medical_license_no: '',
    specialization: '',
    years_of_experience: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to Django backend to store the patient data
    axios.post('http://127.0.0.1:8000/api/doctors/', formData)
      .then(response => {
        
        window.location.href = "http://localhost:3000/Login";
        // Handle success, e.g., show success message, redirect to home page, etc.
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., show error message, etc.
      });
  }

  return (
    <form onSubmit={handleSubmit}>
       <h1><center><b>DoctorRegistration</b></center></h1>
      <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
      <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
      <input type="date" name="date_of_birth" placeholder="Date of Birth" value={formData.date_of_birth} onChange={handleChange} required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="text" name="medical_license_no" placeholder="Medical license no" value={formData.medical_license_no} onChange={handleChange} required/>
      <input type="text" name="specialization" placeholder="specialization" value={formData.specialization} onChange={handleChange} required />
      <input type="text" name="years_of_experience" placeholder="years of experience" value={formData.years_of_experience} onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default DoctorRegistrationForm;
