import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Patient_styles/PatientProfile.css";

const PatientProfile = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Fetch patient data from Django backend
    axios.get('http://127.0.0.1:8000/api/patients/1/') 
      .then(response => {
        setPatientData(response.data);
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., show error message, etc.
      });
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Profile</h1>
      <div className="profile-section">
        <label>First Name:</label>
        <div className="data">{patientData.first_name}</div>
      </div>
      <div className="profile-section">
        <label>Last Name:</label>
        <div className="data">{patientData.last_name}</div>
      </div>
      <div className="profile-section">
        <label>Date of Birth:</label>
        <div className="data">{patientData.date_of_birth}</div>
      </div>
      <div className="profile-section">
        <label>Gender:</label>
        <div className="data">{patientData.gender}</div>
      </div>
      <div className="profile-section">
        <label>Phone Number:</label>
        <div className="data">{patientData.phone_number}</div>
      </div>
      <div className="profile-section">
        <label>Email:</label>
        <div className="data">{patientData.email}</div>
      </div>
      <div className="profile-section">
        <label>Address:</label>
        <div className="data">{patientData.address}</div>
      </div>
      <div className="profile-section">
        <label>Medical History:</label>
        <div className="data">{patientData.medical_history}</div>
      </div>
      <div className="profile-section">
        <label>Insurance Information:</label>
        <div className="data">{patientData.insurance_information}</div>
      </div>
      <div className="profile-section">
        <label>Caretaker Email:</label>
        <div className="data">{patientData.caretaker_email}</div>
      </div>
    </div>
  );
}

export default PatientProfile;
