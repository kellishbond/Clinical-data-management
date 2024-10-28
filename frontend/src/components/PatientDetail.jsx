// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const PatientDetail = () => {
//     const { id } = useParams(); // Ensure the ID is correctly extracted from the route parameters
//     const [patient, setPatient] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPatient = async () => {
//             try {
//                 // Make sure this URL matches your backend route for fetching a specific patient's details
//                 const response = await axios.get(`https://clinical-data-management-backend.onrender.com/${id}`);
//                 setPatient(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching patient details:', err); // Log the error for debugging
//                 setError('Error fetching patient details');
//                 setLoading(false);
//             }
//         };

//         if (id) {
//             fetchPatient();
//         } else {
//             setError('Patient ID not found in URL');
//             setLoading(false);
//         }
//     }, [id]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p className="text-red-500">{error}</p>;
//     return (
//         <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
//             <h2 className="text-2xl font-bold mb-4 text-center">Patient Details</h2>
//             <table className="w-full text-left border-collapse">
//                 <tbody>
//                     <tr className="border-t">
//                         <td className="py-2 px-4 font-semibold border">Name:</td>
//                         <td className="py-2 px-4 border">{patient.name}</td>
//                     </tr>
//                     <tr className="border-t">
//                         <td className="py-2 px-4 font-semibold border">Age:</td>
//                         <td className="py-2 px-4 border">{patient.age}</td>
//                     </tr>
//                     <tr className="border-t">
//                         <td className="py-2 px-4 font-semibold border">Gender:</td>
//                         <td className="py-2 px-4 border">{patient.gender}</td>
//                     </tr>
//                     <tr className="border-t">
//                         <td className="py-2 px-4 font-semibold border">Medical History:</td>
//                         <td className="py-2 px-4 border">{patient.medicalHistory || 'N/A'}</td>
//                     </tr>
//                     <tr className="border-t">
//                         <td className="py-2 px-4 font-semibold border">Date Created:</td>
//                         <td className="py-2 px-4 border">{new Date(patient.dateCreated).toLocaleDateString()}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
    
    
// };

// export default PatientDetail;


// src/components/PatientDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PatientDetail = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Editable fields
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [prescriptions, setPrescriptions] = useState([]);
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await axios.get(`https://clinical-data-management-backend.onrender.com/api/patients/${id}`);
                const data = response.data;
                setPatient(data);
                setName(data.name);
                setAge(data.age);
                setGender(data.gender);
                setMedicalHistory(data.medicalHistory || '');
                setPrescriptions(data.prescriptions || []);
                setTreatments(data.treatments || []);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching patient details:', err);
                setError('Error fetching patient details');
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient();
        } else {
            setError('Patient ID not found in URL');
            setLoading(false);
        }
    }, [id]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedPatient = { name, age, gender, medicalHistory, prescriptions, treatments };
        try {
            await axios.put(`https://clinical-data-management-backend.onrender.com/api/patients/${id}`, updatedPatient);
            setPatient(updatedPatient); // Update local patient data after successful save
            setIsEditing(false);
            alert('Patient updated successfully!');
        } catch (err) {
            console.error('Error updating patient details:', err);
            alert('Failed to update patient.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Patient Details</h2>

            {/* Display Patient Details in View Mode or Edit Form in Edit Mode */}
            {isEditing ? (
                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea
                        value={medicalHistory}
                        onChange={(e) => setMedicalHistory(e.target.value)}
                        placeholder="Medical History"
                        className="w-full border p-2 rounded"
                    />
                    <textarea
                        value={prescriptions.join('\n')}
                        onChange={(e) => setPrescriptions(e.target.value.split('\n'))}
                        placeholder="Prescriptions (one per line)"
                        className="w-full border p-2 rounded"
                    />
                    <textarea
                        value={treatments.join('\n')}
                        onChange={(e) => setTreatments(e.target.value.split('\n'))}
                        placeholder="Treatments (one per line)"
                        className="w-full border p-2 rounded"
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        Save Changes
                    </button>
                </form>
            ) : (
                <div>
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            <tr className="border-t">
                                <td className="py-2 px-4 font-semibold border">Name:</td>
                                <td className="py-2 px-4 border">{patient.name}</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2 px-4 font-semibold border">Age:</td>
                                <td className="py-2 px-4 border">{patient.age}</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2 px-4 font-semibold border">Gender:</td>
                                <td className="py-2 px-4 border">{patient.gender}</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2 px-4 font-semibold border">Medical History:</td>
                                <td className="py-2 px-4 border">{patient.medicalHistory || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <h4 className="font-semibold">Prescriptions</h4>
                        {patient.prescriptions && patient.prescriptions.length > 0 ? (
                            <ul className="list-disc ml-6">
                                {patient.prescriptions.map((prescription, index) => (
                                    <li key={index} className="mb-1">{prescription}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No prescriptions available.</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold">Treatments</h4>
                        {patient.treatments && patient.treatments.length > 0 ? (
                            <ul className="list-disc ml-6">
                                {patient.treatments.map((treatment, index) => (
                                    <li key={index} className="mb-1">{treatment}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No treatments available.</p>
                        )}
                    </div>
                </div>
            )}

            <button
                onClick={handleEditToggle}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
        </div>
    );
};

export default PatientDetail;
