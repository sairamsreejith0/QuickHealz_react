import React, { useState,useEffect } from 'react';
import axios from 'axios'

function EmailScheduleForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('');
  const [caretakeremail,setEmail] = useState('');
  const data = {
    email: localStorage.getItem('userData')
  }
  
  useEffect(() => {
    const fetchCaretakeremail = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/getCaretakerEmail/', data);
        setEmail(response.data);
        // Redirect to dashboard or perform other actions on successful login
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchCaretakeremail();
  }, []);
  

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data ={
        startDate:startDate,
        endDate:endDate,
        time:time,
        email:[localStorage.getItem("userData"),caretakeremail]
    }
    axios.post('http://127.0.0.1:8000/update_schedule/',data
  
    ).then(response => {
        alert("medication reminder scheduled");
      })
      .catch(error => {
        // Handle error response
        console.error(error);
        // Show error message or perform other actions on failed login
      });
    
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
      <label>
        Start date:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />
      <label>
        End date:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />
      <label>
        Time:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      {/* <label>
        email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label> */}
      <br />
      <button type="submit" onClick={handleSubmit}>Schedule Email</button>
    </form>
  );
}

export default EmailScheduleForm;