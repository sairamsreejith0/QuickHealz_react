// AppRoutes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientDashboard from './Patient/PatientDashboard';
import OnlineConsultation from './Patient/OnlineConsultation'
import AppointmentManagement from './Patient/AppointmentManagement'
import MedicationManagement from './Patient/MedicationManagement'
import HealthRecords from './Patient/HealthRecords'
import PatientEducation from './Patient/PatientEducation'
import PatientRegistrationForm from './Patient/PatientRegister'
import DoctorRegistrationForm from './Doctor/DoctorRegister'
import DoctorDashboard from './Doctor/DoctorDashboard'
import CaretakerDashboard from './Caretaker/CaretakerDashboard'
import CaretakerRegistrationForm from './Caretaker/CaretakerRegister'
import Login from './Login';
import MedicationForm from './MedicationForm';
import Pharmacy from './Patient/Pharmacy';
import PatientEducationDoctor from './Doctor/PatientEducation';
import PatientManagementDoctor from './Doctor/PatientManagement';
import ReferralManagementDoctor from './Doctor/ReferralManagement';
import PatientProfile from './Patient/PatientProfile';
import EmailScheduleForm from './Doctor/Prescription';
import PrescriptionManagementDoctor from './Doctor/PrescriptionManagement';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/OnlineConsultation" element={<OnlineConsultation />} />
        <Route path="/AppointmentManagement" element={<AppointmentManagement/>} />
        <Route path="/MedicationManagement" element={<Pharmacy/>} />
        <Route path="/HealthRecords" element={<HealthRecords/>} />
        <Route path="/PatientEducation" element={<PatientEducation/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/PatientDashboard" element={<PatientDashboard/>}/>
        <Route path="/PatientRegistrationForm" element={<PatientRegistrationForm/>}/>
        <Route path="/DoctorRegistrationForm" element={<DoctorRegistrationForm/>}/>
        <Route path="/CaretakerRegistrationForm" element={<CaretakerRegistrationForm/>}/>
        
        <Route path="/DoctorDashboard" element={<DoctorDashboard/>}/>
        <Route path="/CaretakerDashboard" element={<CaretakerDashboard/>}/>
        <Route path="/medicationremainder" element={<MedicationForm/>}/>
        <Route path="/PatientEducationDoctor" element={<PatientEducationDoctor/>}/>
        <Route path="/PatientManagementDoctor" element={<PatientManagementDoctor/>}/>
        <Route path="/PrescriptionManagementDoctor" element={<PrescriptionManagementDoctor/>}/>
        <Route path="/ReferralManagementDoctor" element={<ReferralManagementDoctor/>}/>
        <Route path="/Profile" element={<PatientProfile/>}/>
        <Route path="/EmailScheduleForm" element={<EmailScheduleForm/>}/>



      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;
