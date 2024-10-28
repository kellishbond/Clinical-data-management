// src/components/AddPatientForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddPatientForm = () => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [medicalHistory, setMedicalHistory] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newPatient = { name, age, gender, medicalHistory };
//         try {
//             await axios.post('http://localhost:5000/api/patients', newPatient);
//             // Reset form fields after successful submission
//             setName('');
//             setAge('');
//             setGender('');
//             setMedicalHistory('');
//             alert('Patient added successfully!');
//         } catch (err) {
//             console.error('Error adding patient:', err);
//             alert('Failed to add patient.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg shadow-md bg-white">
//             <h3 className="text-xl font-bold mb-4">Add New Patient</h3>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                 <input 
//                     type="text" 
//                     placeholder="Name" 
//                     value={name} 
//                     onChange={(e) => setName(e.target.value)} 
//                     required 
//                     className="border p-2 rounded"
//                 />
//                 <input 
//                     type="number" 
//                     placeholder="Age" 
//                     value={age} 
//                     onChange={(e) => setAge(e.target.value)} 
//                     required 
//                     className="border p-2 rounded"
//                 />
//                 <select 
//                     value={gender} 
//                     onChange={(e) => setGender(e.target.value)} 
//                     required 
//                     className="border p-2 rounded"
//                 >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                 </select>
//                 <textarea 
//                     placeholder="Medical History" 
//                     value={medicalHistory} 
//                     onChange={(e) => setMedicalHistory(e.target.value)} 
//                     required 
//                     className="border p-2 rounded"
//                 />
//             </div>
//             <button 
//                 type="submit" 
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//                 Add Patient
//             </button>
//         </form>
//     );
// };

// export default AddPatientForm;


// src/components/AddPatientForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddPatientForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [prescriptions, setPrescriptions] = useState(['']);
    const [treatments, setTreatments] = useState(['']);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPatient = { name, age, gender, medicalHistory, prescriptions, treatments };
        try {
            await axios.post('http://localhost:5000/api/patients', newPatient);
            // Reset form fields after successful submission
            setName('');
            setAge('');
            setGender('');
            setMedicalHistory('');
            setPrescriptions(['']);
            setTreatments(['']);
            alert('Patient added successfully!');
        } catch (err) {
            console.error('Error adding patient:', err);
            alert('Failed to add patient.');
        }
    };

    const handlePrescriptionChange = (index, value) => {
        const updatedPrescriptions = [...prescriptions];
        updatedPrescriptions[index] = value;
        setPrescriptions(updatedPrescriptions);
    };

    const handleTreatmentChange = (index, value) => {
        const updatedTreatments = [...treatments];
        updatedTreatments[index] = value;
        setTreatments(updatedTreatments);
    };

    const addPrescriptionField = () => setPrescriptions([...prescriptions, '']);
    const addTreatmentField = () => setTreatments([...treatments, '']);

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold mb-4">Add New Patient</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="border p-2 rounded"
                />
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    required 
                    className="border p-2 rounded"
                />
                <select 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)} 
                    required 
                    className="border p-2 rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <textarea 
                    placeholder="Medical History" 
                    value={medicalHistory} 
                    onChange={(e) => setMedicalHistory(e.target.value)} 
                    required 
                    className="border p-2 rounded"
                />
            </div>
            
            {/* Prescriptions Fields */}
            <div className="mb-4">
                <h4 className="font-semibold">Prescriptions</h4>
                {prescriptions.map((prescription, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Prescription ${index + 1}`}
                        value={prescription}
                        onChange={(e) => handlePrescriptionChange(index, e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                ))}
                <button 
                    type="button" 
                    onClick={addPrescriptionField} 
                    className="text-blue-500 underline"
                >
                    + Add Another Prescription
                </button>
            </div>

            {/* Treatments Fields */}
            <div className="mb-4">
                <h4 className="font-semibold">Treatments</h4>
                {treatments.map((treatment, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Treatment ${index + 1}`}
                        value={treatment}
                        onChange={(e) => handleTreatmentChange(index, e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                ))}
                <button 
                    type="button" 
                    onClick={addTreatmentField} 
                    className="text-blue-500 underline"
                >
                    + Add Another Treatment
                </button>
            </div>

            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Patient
            </button>
        </form>
    );
};

export default AddPatientForm;
