import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputPatientID.css';

function PatientIDInput() {
    const [patientID, setPatientID] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/patient-info/${patientID}`);
       
    };

    return (
        <div className='userInput'>
            <label>
                enter patient ID: 
                <input 
                    type="number" 
                    value={patientID} 
                    onChange={(input) => setPatientID(input.target.value)}
                />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default PatientIDInput;
