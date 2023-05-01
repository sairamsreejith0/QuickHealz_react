import React, { Component } from "react";
import "../Doctor_styles/ReferralManagement.css";

class ReferralManagementDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referrals: [
        {
          id: 1,
          patientName: "John Smith",
          section: "Cardiology",
          reason: "Chest pain",
          date: "2023-04-15",
          doctorName: "Dr. Jane Doe",
        },
        {
          id: 2,
          patientName: "Mary Johnson",
          section: "Dermatology",
          reason: "Skin rash",
          date: "2023-04-10",
          doctorName: "Dr. John Smith",
        },
      ],
      patientName: "",
      section: "",
      reason: "",
      doctorName: "",
    };
  }

  handlePatientNameChange = (event) => {
    this.setState({ patientName: event.target.value });
  };

  handleSectionChange = (event) => {
    this.setState({ section: event.target.value });
  };

  handleReasonChange = (event) => {
    this.setState({ reason: event.target.value });
  };

  handleDoctorNameChange = (event) => {
    this.setState({ doctorName: event.target.value });
  };

  handleIssueReferral = () => {
    const { patientName, section, reason, doctorName } = this.state;

    // Generate a unique ID for the new referral
    const id = Math.max(...this.state.referrals.map((r) => r.id)) + 1;

    // Create a new referral object
    const newReferral = {
      id: id,
      patientName: patientName,
      section: section,
      reason: reason,
      date: new Date().toISOString().slice(0, 10),
      doctorName: doctorName,
    };

    // Add the new referral to the state
    this.setState((prevState) => ({
      referrals: [...prevState.referrals, newReferral],
      patientName: "",
      section: "",
      reason: "",
      doctorName: "",
    }));
  };

  handleEdit = (id) => {
    const referral = this.state.referrals.find((r) => r.id === id);
  
    this.setState({
      patientName: referral.patientName,
      section: referral.section,
      reason: referral.reason,
      doctorName: referral.doctorName,
    });
  };
  
  handleDelete = (id) => {
    const updatedReferrals = this.state.referrals.filter((r) => r.id !== id);

    this.setState({
      referrals: updatedReferrals,
    });
  };

  render() {
    const { referrals, patientName, section, reason, doctorName } =
      this.state;

    return (
      <div className="referral-management">
        <h1>Referral Management</h1>
        <div className="new-referral">
          <h2>Issue New Referral</h2>
          <div>
            <label>Patient Name:</label>
            <input
              type="text"
              value={patientName}
              onChange={this.handlePatientNameChange}
            />
          </div>
          <div>
            <label>Section:</label>
            <input
              type="text"
              value={section}
              onChange={this.handleSectionChange}
            />
          </div>
          <div>
            <label>Reason:</label>
            <input
              type="text"
              value={reason}
              onChange={this.handleReasonChange}
            />
          </div>
          <div>
            <label>Doctor Name:</label>
            <input
              type="text"
              value={doctorName}
              onChange={this.handleDoctorNameChange}
            />
          </div>
          <button onClick={this.handleIssueReferral}>Issue Referral</button>
        </div>
        <div className="referral-history">
          <h2>Referral History</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient Name</th>
                <th>Section</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Doctor Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.patientName}</td>
                  <td>{r.section}</td>
                  <td>{r.reason}</td>
                  <td>{r.date}</td>
                  <td>{r.doctorName}</td>
                  <td>
                    <button className="btn" onClick={() => this.handleEdit(r.id)}>
                     Edit
                    </button>
                    <button className="btn" onClick={() => this.handleDelete(r.id)}>
                      Delete
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

export default ReferralManagementDoctor;
