import React, { Component } from "react";
import "../Doctor_styles/DoctorDashboard.css";

class DoctorDashboard extends Component {
  constructor(props) {
    super(props);
    if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
    this.state = {
      PatientManagement: false,
      OnlineConsultation1: false,
      AppointmentManagement1: false,
      PrescriptionManagement: false,
      PatientEducation1: false,
      ReferralManagement: false,
      redirectToPatientManagement : false,
      redirectToOnlineConsultation: false,
      redirectToAppointmentManagement: false,
      redirectToPrescriptionManagement: false,
      redirectToPatientEducation: false,
      redirectToReferralManagement: false,
    };
  }
  handleLanguageChange = (e) => {
    const language = e.target.value;
    const languageFile = require(`./lang/${language}.js`).default; // Import appropriate language file
    this.setState({ languageSelection: language, languageFile: languageFile }); // Update state with selected language and language file
    this.setState({patientmanagementText : languageFile.patientmanagement});
    this.setState({onlineconsultationText : languageFile.onlineconsultation});
    this.setState({appointmentmanagementText : languageFile.appointmentmanagement});
    this.setState({prescriptionmanagementText : languageFile.prescriptionmanagement});;
    this.setState({patienteducationText : languageFile.patienteducation});
    this.setState({referralmanagementText : languageFile.referralmanagement});
   this.setState({languageselectionText : languageFile.languageselection});
  this.setState({logoutText : languageFile.logout});
  this.setState({doctordashboardText : languageFile.doctordashboard});

  }
  handlePatientManagement = () => {
    this.setState({ redirectToPatientManagement: true });
  };

  handleOnlineConsultation = () => {
    this.setState({ redirectToOnlineConsultation: true });
  };

  handleAppointmentManagement = () => {
    this.setState({ redirectToAppointmentManagement: true });
  };

  handlePrescriptionManagement = () => {
    this.setState({ redirectToPrescriptionManagement: true });
  };

  handlePatientEducation = () => {
    this.setState({ redirectToPatientEducation: true });
  };

  handleReferralManagement = () => {
    this.setState({ redirectToReferralManagement: true });
  };
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
      patientManagement,
      onlineConsultation,
      PrescriptionManagement,
      appointmentManagement,
      patientEducation,
      referralManagement,
      languageSelection,
      languageFile,
      patientmanagementText,
      onlineconsultationText,
      appointmentmanagementText,
      prescriptionmanagementText,
      patienteducationText,
      referralmanagementText,
      languageselectionText,
      logoutText,
      doctordashboardText,
      redirectToPatientManagement,
      redirectToOnlineConsultation,
      redirectToPrescriptionManagement,
      redirectToAppointmentManagement,
      redirectToPatientEducation,
      redirectToReferralManagement,      
    } = this.state;

    if (redirectToPatientManagement) {
      window.location.href = "http://localhost:3000/PatientManagementDoctor";
    }
    if (redirectToOnlineConsultation) {
      window.location.href = "http://localhost:3000/OnlineConsultationDoctor";
    }
    if (redirectToAppointmentManagement) {
      window.location.href = "http://localhost:3000/AppointmentManagementDoctor";
    }
    if (redirectToPrescriptionManagement) {
      window.location.href = "http://localhost:3000/PrescriptionManagementDoctor";
    }
    if (redirectToPatientEducation) {
      window.location.href = "http://localhost:3000/PatientEducationDoctor";
    }
    if (redirectToReferralManagement) {
      window.location.href = "http://localhost:3000/ReferralManagementDoctor";
    }

    return (
      <div className="doctor-dashboard">
        <h1>{doctordashboardText?doctordashboardText:"Doctor Dashboard"}</h1>
        <div className="dashboard-options">
        <div
            className={patientManagement ? "option active" : "option"}
            onClick={this.handlePatientManagement}
          >
            {patientmanagementText?patientmanagementText:"Patient Management"}
          </div>
          <div
            className={onlineConsultation ? "option active" : "option"}
            onClick={this.handleOnlineConsultation}
          >
            {onlineconsultationText?onlineconsultationText: "Online Consultation"}
          </div>
          <div
            className={appointmentManagement ? "option active" : "option"}
            onClick={this.handleAppointmentManagement}
          >
            {appointmentmanagementText?appointmentmanagementText: "Appointment Management"}
          </div>
          <div
            className={PrescriptionManagement ? "option active" : "option"}
            onClick={this.handlePrescriptionManagement}
          >
            {prescriptionmanagementText?prescriptionmanagementText:"Prescription Management"}
          </div>
          <div
            className={patientEducation ? "option active" : "option"}
            onClick={this.handlePatientEducation}
          >
            {patienteducationText?patienteducationText:"Patient Education"}
          </div>
          <div
            className={referralManagement ? "option active" : "option"}
            onClick={this.handleReferralManagement}
          >
            {referralmanagementText?referralmanagementText:"Referral Management"}
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
        <button onClick={this.Logout}>{logoutText?logoutText:"Logout"}</button>
      </div>
    );
  }
}


export default DoctorDashboard;
