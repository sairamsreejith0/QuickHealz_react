// HealthRecords.js

import React, { useState } from 'react';
import "../Patient_styles/HealthRecords.css"
const HealthRecords = () => {
  if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
  const [medicalHistory, setMedicalHistory] = useState([
    { id: 1, date: '01/01/2022', condition: 'Hypertension' },
    { id: 2, date: '02/15/2022', condition: 'Allergic Rhinitis' },
    { id: 3, date: '03/05/2022', condition: 'Type 2 Diabetes' },
  ]);
  const [allergies, setAllergies] = useState(['Pollen', 'Dust', 'Peanuts']);
  const [pastConsultations, setPastConsultations] = useState([
    { id: 1, date: '01/01/2022', doctor: 'Dr. Smith', reason: 'Annual Checkup' },
    { id: 2, date: '02/15/2022', doctor: 'Dr. Johnson', reason: 'Cold Symptoms' },
    { id: 3, date: '03/05/2022', doctor: 'Dr. Lee', reason: 'Follow-up on Medication' },
  ]);

  return (
    <div className="container">
      <h1>Health Records</h1>
      <div className="record-section">
        <h2>Medical History</h2>
        <ul>
          {medicalHistory.map(record => (
            <li key={record.id}>
              <span className="date">{record.date}</span>
              <span className="condition">{record.condition}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="record-section">
        <h2>Allergies</h2>
        <ul>
          {allergies.map((allergy, index) => (
            <li key={index}>{allergy}</li>
          ))}
        </ul>
      </div>
      <div className="record-section">
        <h2>Past Consultations</h2>
        <ul>
          {pastConsultations.map(consultation => (
            <li key={consultation.id}>
              <span className="date">{consultation.date}</span>
              <span className="doctor">{consultation.doctor}</span>
              <span className="reason">{consultation.reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthRecords;
