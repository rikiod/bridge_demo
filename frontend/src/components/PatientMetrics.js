import React from 'react';
import { useParams } from 'react-router-dom';

function PatientInfo() {
    const { patientID } = useParams();

    return (
        <div>
            <p>Displaying information for patient ID: {patientID}</p>
           
            {/* add flask call here  */}
            
        </div>
    );
}

export default PatientInfo;
