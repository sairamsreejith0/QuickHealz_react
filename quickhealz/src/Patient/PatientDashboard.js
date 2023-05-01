import React, { Component } from "react";
import "../Patient_styles/PatientDashboard.css"; // Import CSS for styling


class PatientDashboard extends Component {
  constructor(props) {
    
    super(props);
    if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
    // Initialize state with initial data
    this.state = {
      onlineConsultation: false,
      appointmentManagement: false,
      medicationManagement: false,
      healthRecords: false,
      patientEducation: false,
      billingAndPayment: false,
      feedbackAndRating: false,
      redirectToAppointmentManagement: false,
      redirectToOnlineConsultation:false,
      redirectToMedicationManagement:false,
      redirectToHealthRecords:false,
      redirectToPatientEducation:false,
      redirectToProfile:false,
      
      languageSelection: "English", // Set default language
    };
   
    
    

  }

  // Function to handle language selection change
  handleLanguageChange = (e) => {
    const language = e.target.value;
    const languageFile = require(`./lang/${language}.js`).default; // Import appropriate language file
    this.setState({ languageSelection: language, languageFile: languageFile }); // Update state with selected language and language file
    this.setState({onlineConsultationText : languageFile.onlineConsultation});
    this.setState({appointmentManagementText : languageFile.appointmentManagement});
    this.setState({medicationManagementText : languageFile.medicationManagement});;
    this.setState({healthRecordsText : languageFile.healthRecords});
    this.setState({patientEducationText : languageFile.patientEducation});
    this.setState({billingAndPaymentText : languageFile.billingAndPayment});
    this.setState({ProfileText : languageFile.profile});
   this.setState({languageSelectionText : languageFile.languageSelection});
  this.setState({logoutText : languageFile.logout});
  this.setState({patientdashboardText : languageFile.patientdashboard});
  this.setState({languageselectionText : languageFile.languageselection});

    
  
    
  }
  handleOnlineConsultaion = () => {
    this.setState({ redirectToOnlineConsultation: true }); // Update state to trigger redirection
  }
  handleAppointmentManagement=()=>{
    this.setState({redirectToAppointmentManagement:true});
  }
  handleMedicationManagement=()=>{
    this.setState({redirectToMedicationManagement:true});
  }
  handleHealthRecords=()=>{
    this.setState({redirectToHealthRecords:true});
  }
  handlePatientEducation = () => {
    this.setState({redirectToPatientEducation:true});
  }
  handleProfile = () => {
    this.setState({redirectToProfile:true});
  }
  Logout = () => {
    try {
      localStorage.removeItem('userData');
      localStorage.removeItem('token');
      window.location.href = 'http://localhost:3000/Login';
      console.log(localStorage)
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
 
  

  render() {
    const {
      languageFile,
      onlineConsultation,
      appointmentManagement,
      medicationManagement,
      healthRecords,
      patientEducation,
      billingAndPayment,
      Profile,
      feedbackAndRating,
      languageSelection,
      redirectToOnlineConsultation,
      redirectToAppointmentManagement,
      redirectToMedicationManagement,
      redirectToHealthRecords,
      redirectToPatientEducation,
      redirectToProfile,
      logoutText,
      logout,
      languageSelectionText ,
      onlineConsultationText ,
      appointmentManagementText,
      medicationManagementText,
      healthRecordsText,
      patientEducationText,
      billingAndPaymentText,
      ProfileText,
      patientdashboardText,
      languageselectionText,
      
    } = this.state;
 

    if (redirectToOnlineConsultation) {
        window.location.href = "http://localhost:3000/OnlineConsultation"; // Replace with your desired URL
      }
    if(redirectToAppointmentManagement)
    {
        window.location.href = "http://localhost:3000/AppointmentManagement";
    }
    if(redirectToMedicationManagement)
    {
        window.location.href = "http://localhost:3000/MedicationManagement";
    }
    if(redirectToHealthRecords)
    {
        window.location.href = "http://localhost:3000/HealthRecords";
    }
    if(redirectToPatientEducation)
    {
        window.location.href = "http://localhost:3000/PatientEducation";
    }
    if(redirectToProfile)
    {
        window.location.href = "http://localhost:3000/Profile";
    }

    return (
      <div className="patient-dashboard">
        <h1>{patientdashboardText? patientdashboardText:"Patient Dashboard"}</h1>
        <div className="dashboard-options">
          <div
            className={onlineConsultation ? "option active" : "option"}
            onClick={this.handleOnlineConsultaion}
          >
            {onlineConsultationText ? onlineConsultationText:"Online Consultation"}
          </div>
          <div
            className={appointmentManagement ? "option active" : "option"}
            onClick={this.handleAppointmentManagement}
          >
             {appointmentManagementText ? appointmentManagementText:"Appointment management"}
          </div>
          <div
            className={medicationManagement ? "option active" : "option"}
            onClick={this.handleMedicationManagement}
          >
           {medicationManagementText ? medicationManagementText:"Medication management"}
          </div>
          <div
            className={healthRecords ? "option active" : "option"}
            onClick={this.handleHealthRecords}
          >
             {healthRecordsText ? healthRecordsText:"Health records"}
          </div>
          <div
            className={patientEducation ? "option active" : "option"}
            onClick={this.handlePatientEducation}
          >
             {patientEducationText ?patientEducationText:"Patient Education"}
          </div>
          <div
            className={billingAndPayment ? "option active" : "option"}
            onClick={() => this.setState({ billingAndPayment: !billingAndPayment })}
          >
             {billingAndPaymentText?billingAndPaymentText :"billing and payment"}
          </div>
          <div
            className={Profile ? "option active" : "option"}
            onClick={this.handleProfile}
          >
             {ProfileText ? ProfileText:"Profile"}
          </div>
        </div>
        <div className="language-selection">
          <label htmlFor="languageSelect">{languageselectionText?languageselectionText:"Language Selection:"}</label>
          <select id="languageSelect" value={languageSelection} onChange={this.handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <button onClick={this.Logout}> {logoutText ? logoutText:"logout"}</button>
        
      </div>
    );
    }
  }

export default PatientDashboard;
