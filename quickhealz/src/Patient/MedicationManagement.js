import React, { useState } from 'react';
import "../Patient_styles/MedicationManagement.css"

const MedicationManagement = () => {
  if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
  const [medications, setMedications] = useState([
    { id: 1, name: 'Medication A', dosage: '1 pill daily', reminders: true },
    { id: 2, name: 'Medication B', dosage: '2 pills twice daily', reminders: false },
    { id: 3, name: 'Medication C', dosage: '1 pill every 8 hours', reminders: true },
  ]);

  const handleToggleReminders = (id) => {
    setMedications(
      medications.map(medication => {
        if (medication.id === id) {
          return { ...medication, reminders: !medication.reminders };
        }
        return medication;
      })
    );
  }

  return (
    <div>
      <h1>Medication Management</h1>
      <ul>
        {medications.map(medication => (
          <li key={medication.id}>
            <strong>{medication.name}</strong> - {medication.dosage}
            <button onClick={() => handleToggleReminders(medication.id)}>
              {medication.reminders ? 'Disable Reminders' : 'Enable Reminders'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicationManagement;
