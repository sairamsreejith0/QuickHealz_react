import React, { Component } from "react";
import "../Doctor_styles/PrescriptionManagement.css";
import axios from "axios";

class PrescriptionManagementDoctor extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      medications:[],
      maxId : 0,
      medication: "",
      dosage: "",
      instructions: "",
    };
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/get_medication/')
      .then(response => response.json())
      .then(data => {
        const maxId = data.medication_list.reduce((max, medication) => {
          return medication.id > max ? medication.id : max;
        }, 0);
        this.setState({ medications: data.medication_list, maxId: maxId });
        console.log(this.state.maxId);
      });
    
  }
  

 
  handleEdit = (id) => {
    const prescriptionToEdit = this.state.medications.find((p) => p.id === id);
  
    this.setState({
      medication: prescriptionToEdit.medication,
      dosage: prescriptionToEdit.dosage,
      instructions: prescriptionToEdit.instructions,
      editing: true,
      editingId: id,
    });
  };
  
  handleDelete = (id) => {
    // Make an API call to the backend to delete the row with the given id
    fetch(`http://127.0.0.1:8000/delete_medication/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.status === 204) {
        // If the delete operation was successful, remove the deleted row from the state
        const updatedPrescriptions = this.state.medications.filter((p) => p.id !== id);
        this.setState({
          medications: updatedPrescriptions,
        });
        
      }
    })
    .catch(error => console.log(error));
  };
  
  handleMedicationChange = (event) => {
    this.setState({ medication: event.target.value });
  };

  handleDosageChange = (event) => {
    this.setState({ dosage: event.target.value });
  };

  handleInstructionsChange = (event) => {
    this.setState({ instructions: event.target.value });
  };
  handleSchedule = (id) => {
    window.location.href="http://localhost:3000/EmailScheduleForm";
    };
   
    

  handleDownload = (id) => {
  
    const prescriptionToDownload = this.state.medications.find((p) => p.id === id);
    console.log(prescriptionToDownload);
    const fileName = `${prescriptionToDownload.medication}_${prescriptionToDownload.dosage}.txt`;
    console.log(fileName);
    const fileContents = `
      Medication: ${prescriptionToDownload.medication}
      Dosage: ${prescriptionToDownload.dosage}
      Instructions: ${prescriptionToDownload.instructions}
      Date Issued: ${prescriptionToDownload.dateIssued}
    `;
    console.log(fileContents)
    // Create a new Blob object with the file contents and set the MIME type
    const blob = new Blob([fileContents], { type: "text/plain;charset=utf-8" });

    // Use the browser's built-in save functionality to save the file to the user's machine
    const link = document.createElement("a");
    link.download = fileName;
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }

  handleIssuePrescription = () => {
    const {medication, dosage, instructions } = this.state;
    
    // Generate a unique ID for the new prescription
    
    this.setState(prevState => ({ maxId: parseInt(prevState.maxId + 1) }), () => {
      const { maxId } = this.state

    // Create a new prescription object
    const newPrescription = {
      id: maxId,
      medication: medication,
      dosage: dosage,
      instructions: instructions,
      dateIssued: new Date().toISOString().slice(0, 10),
      patientId: 1, // In a real app, this would be obtained from the selected patient
    };
  
    const prescriptionToSchedule = newPrescription;
    prescriptionToSchedule.patientId = localStorage.getItem("userData");
    console.log(prescriptionToSchedule);
    axios.post('http://127.0.0.1:8000/api/medications/',prescriptionToSchedule)
  
    .then(response => {
        // Handle successful response
        //  window.location.href="http://localhost:3000/EmailScheduleForm";
      })
      .catch(error => {
        // Handle error response
        console.error(error);
        // Show error message or perform other actions on failed login
      });

    // Add the new prescription to the state
    this.setState((prevState) => ({
      medications: [...prevState.medications, newPrescription],
      medication: "",
      dosage: "",
      instructions: "",
    }));
  });
  };

  render() {
    const { prescriptions, medication, dosage, instructions } = this.state;
    return (
      <div className="prescription-management">
      <h1>Prescription Management</h1>
      <div className="new-prescription">
        <h2>Issue New Prescription</h2>
        <div>
          <label>Medication:</label>
          <input
            type="text"
            value={medication}
            onChange={this.handleMedicationChange}
          />
        </div>
        <div>
          <label>Dosage:</label>
          <input
            type="text"
            value={dosage}
            onChange={this.handleDosageChange}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <input
            type="text"
            value={instructions}
            onChange={this.handleInstructionsChange}
          />
        </div>
        <button onClick={this.handleIssuePrescription}>Issue Prescription</button>
      </div>
      

      <div className="prescription-history">
           <h2>Prescription History</h2>
           
      <table>
        <thead>
          <tr>
            {/* <th>ID</th>
            <th>Patient ID</th> */}
            <th>Medication</th>
            <th>Dosage</th>
            <th>Instructions</th>
            <th>Date Issued</th>
          </tr>
        </thead>
        <tbody>
          {this.state.medications.map(medication => (
            <tr key={medication.id}>
              {/* <td>{medication.id}</td>
              <td>{medication.patientId}</td> */}
              <td>{medication.medication}</td>
              <td>{medication.dosage}</td>
              <td>{medication.instructions}</td>
              <td>{medication.dateIssued}</td>
              <td>
                   <button className="btn" onClick={() => this.handleEdit(medication.id)}>
                   Edit
                 </button>
               <button className="btn" onClick={() => this.handleDelete(medication.id)} > 
                 Delete 
                 </button>
                 <button className="btn" onClick={() => this.handleDownload(medication.id)}>
                     Download
                   </button>
                   <button className="btn" onClick={() => this.handleSchedule(medication.id)}>
                     reminder
                   </button>
                 </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
          }
        }

  
export default PrescriptionManagementDoctor;

    
     
    
    


