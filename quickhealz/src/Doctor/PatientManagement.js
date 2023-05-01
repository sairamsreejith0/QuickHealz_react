// PatientManagement.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientManagementDoctor = ({ match }) => {
  const [patient, setPatient] = useState({});
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    const fetchPatient = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/patients/${match.params.id}/`);
      setPatient(res.data);
      setHealthRecords(res.data.health_records);
    };
    fetchPatient();
  }, [match.params.id]);

  const handleDelete = async () => {
    await axios.delete(`http://127.0.0.1:8000/api/patients/${match.params.id}/`);
    window.location.href = "http://localhost:3000/PatientList";
  };

  return (
    <div>
      <h1>Patient Management</h1>
      <h2>{patient.first_name} {patient.last_name}</h2>
      <p>Date of Birth: {patient.date_of_birth}</p>
      <p>Gender: {patient.gender}</p>
      <p>Phone Number: {patient.phone_number}</p>
      <p>Email: {patient.email}</p>
      <p>Address: {patient.address}</p>
      <p>Insurance Information: {patient.insurance_information}</p>
      <p>Caretaker Email: {patient.caretaker_email}</p>
      <p>Username: {patient.username}</p>

      <h2>Health Records</h2>
      <Link to={`/patients/${match.params.id}/health-records/create`}>Add Health Record</Link>
      <ul>
        {healthRecords.map(record => (
          <li key={record.id}>
            <p>Date: {record.date}</p>
            <p>Symptoms: {record.symptoms}</p>
            <p>Diagnosis: {record.diagnosis}</p>
            <p>Prescription: {record.prescription}</p>
            <Link to={`/patients/${match.params.id}/health-records/${record.id}`}>View</Link>
          </li>
        ))}
      </ul>

      <h2>Medical History</h2>
      <p>{patient.medical_history}</p>

      <h2>Previous Consultations</h2>
      <ul>
        {/* List previous consultations */}
      </ul>

      <button onClick={handleDelete}>Delete Patient</button>
    </div>
  );
}

export default PatientManagementDoctor;
