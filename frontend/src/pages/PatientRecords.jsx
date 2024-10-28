// // src/pages/PatientRecords.jsx
// import React from 'react';
// import PatientList from '../components/PatientList'; // Ensure this import is correct
// import AddPatientForm from '../components/AddPatientForm'; // Import the form
// const PatientRecords = () => {
//     return (
//         <div>
//             <h1>Patient Records</h1>
//             <PatientList />
//             <AddPatientForm /> {/* Render the form */}
//         </div>
//     );
// };

// export default PatientRecords;





// src/pages/PatientRecords.jsx
import React from 'react';
import PatientList from '../components/PatientList';
import AddPatientForm from '../components/AddPatientForm';

const PatientRecords = () => {
    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">Patient Records</h1>
            <PatientList />
            <AddPatientForm />
        </div>
    );
};

export default PatientRecords;
