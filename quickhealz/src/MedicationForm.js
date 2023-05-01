import React from 'react';
import axios from 'axios';

class MedicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dosage: '',
      startDate: '',
      endDate: '',
      frequency: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const medication = {
      name: this.state.name,
      dosage: this.state.dosage,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      frequency: this.state.frequency
    };
    axios.post('http://127.0.0.1:8000/api/medications/', medication)
      .then(response => {
        // this.props.onSubmit(response.data);
        this.setState({
          name: '',
          dosage: '',
          startDate: '',
          endDate: '',
          frequency: ''
        });
        window.location.href="http://localhost:3000/PatientEducation";
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={this.state.dosage}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="frequency">Frequency:</label>
          <input
            type="text"
            id="frequency"
            name="frequency"
            value={this.state.frequency}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default MedicationForm;