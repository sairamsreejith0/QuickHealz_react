import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './DoctorProfile.css';

const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    // Fetch doctor data from the backend using the currently logged in user's ID
    axios.get(`http://127.0.0.1:8000/api/doctors/${localStorage.getItem('user_id')}/`)
      .then(response => {
        setDoctorData(response.data);
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., show error message, etc.
      });
  }, []);

  if (!doctorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="doctor-profile">
      <h1>Doctor Profile</h1>
      <div className="profile-details">
        <div className="profile-row">
          <span className="label">First Name:</span>
          <span className="value">{doctorData.first_name}</span>
        </div>
        <div className="profile-row">
          <span className="label">Last Name:</span>
          <span className="value">{doctorData.last_name}</span>
        </div>
        <div className="profile-row">
          <span className="label">Date of Birth:</span>
          <span className="value">{doctorData.date_of_birth}</span>
        </div>
        <div className="profile-row">
          <span className="label">Gender:</span>
          <span className="value">{doctorData.gender}</span>
        </div>
        <div className="profile-row">
          <span className="label">Phone Number:</span>
          <span className="value">{doctorData.phone_number}</span>
        </div>
        <div className="profile-row">
          <span className="label">Email:</span>
          <span className="value">{doctorData.email}</span>
        </div>
        <div className="profile-row">
          <span className="label">Address:</span>
          <span className="value">{doctorData.address}</span>
        </div>
        <div className="profile-row">
          <span className="label">Medical License No:</span>
          <span className="value">{doctorData.medical_license_no}</span>
        </div>
        <div className="profile-row">
          <span className="label">Specialization:</span>
          <span className="value">{doctorData.specialization}</span>
        </div>
        <div className="profile-row">
          <span className="label">Years of Experience:</span>
          <span className="value">{doctorData.years_of_experience}</span>
        </div>
        <div className="profile-row">
          <span className="label">Username:</span>
          <span className="value">{doctorData.username}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
