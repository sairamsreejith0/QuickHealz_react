import React from "react";
import "../Patient_styles/onlineConsultation.css"; // Import CSS for styling

const OnlineConsultation = () => {
  return (
    <div className="online-consultation">
      <h1>Online Consultation</h1>
      <p>
        Welcome to our online consultation service! Please fill out the form
        below to schedule an appointment with one of our healthcare
        professionals.
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OnlineConsultation;
