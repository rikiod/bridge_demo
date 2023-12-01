import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPatientID from './components/InputPatientID/InputPatientID.js';
import PatientMetrics from './components/PatientMetrics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPatientID />} />
        <Route path="/patient-info/:patientID" element={<PatientMetrics />} />
      </Routes>
    </Router>
  );
}

export default App;
