// AppointmentManagement.js
import React, { useState } from 'react';
import '../Patient_styles/AppointmentManagement.css'

function AppointmentManagement() {
  if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
  const [appointments, setAppointments] = useState([]); // State to store appointments

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values from form fields
    const { name, date, time } = e.target.elements;

    // Create new appointment object
    const newAppointment = {
      id: new Date().getTime(), // Generate unique id for appointment
      name: name.value,
      date: date.value,
      time: time.value,
    };

    // Update appointments state with new appointment
    setAppointments([...appointments, newAppointment]);

    // Reset form fields
    e.target.reset();
  };

  // Function to handle appointment deletion
  const handleAppointmentDelete = (appointmentId) => {
    // Filter out the appointment with the given id from the appointments state
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );

    // Update appointments state with updated appointments
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-management-container">
      <h1>Appointment Management</h1>
      <form className="appointment-form" onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="date" name="date" required />
        <input type="time" name="time" required />
        <button type="submit">Schedule Appointment</button>
      </form>
      <div className="appointment-list">
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <p>
                  <strong>Name:</strong> {appointment.name}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <button
                  onClick={() => handleAppointmentDelete(appointment.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments scheduled.</p>
        )}
      </div>
    </div>
  );
}

export default AppointmentManagement;
