
import React, { useState } from 'react';
import "../Doctor_styles/PatientEducation.css";
import axios from 'axios';

const PatientEducationDoctor = () => {
  
  if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
    
      const [text, setText] = useState('');
      const email = localStorage.getItem('userData');
    
      const handleTextChange = (event) => {
        setText(event.target.value);
      }
      const data={
        email : email,
        text : text

      };
    
      const handleAddClick = () => {
        // Add code here to handle adding the text to your data or performing any other action
      axios.post('http://127.0.0.1:8000/api/Education/', data)
      .then(response => {
        
        window.location.href = "http://localhost:3000/PatientEducationDoctor";
        // Handle success, e.g., show success message, redirect to home page, etc.
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., show error message, etc.
      });
      }
    
      return (
        <div>
          <center><b><h1>Add patient education resource</h1></b></center>
          <textarea onChange={handleTextChange} value={text} className='text-area'/>
          <button onClick={handleAddClick} className='add-button'>Add</button>
        </div>
      );

  
};


export default PatientEducationDoctor;