// // // src/components/PatientList.jsx
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const PatientList = () => {
// //     const [patients, setPatients] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchPatients = async () => {
// //             try {
// //                 const response = await axios.get('https://clinical-data-management-backend.onrender.com');
// //                 setPatients(response.data);
// //                 setLoading(false);
// //             } catch (err) {
// //                 setError('Error fetching patient data');
// //                 setLoading(false);
// //             }
// //         };

// //         fetchPatients();
// //     }, []);

// //     if (loading) return <p className="text-center">Loading...</p>;
// //     if (error) return <p className="text-center text-red-500">{error}</p>;

// //     return (
// //         <div className="p-4">
// //             <h2 className="text-2xl font-bold mb-4">Patient List</h2>
// //             <div className="overflow-x-auto">
// //                 <table className="min-w-full bg-white border border-gray-300">
// //                     <thead>
// //                         <tr className="bg-blue-500 text-white">
// //                             <th className="py-3 px-4 border-b text-left">ID</th>
// //                             <th className="py-3 px-4 border-b text-left">Name</th>
// //                             <th className="py-3 px-4 border-b text-left">Age</th>
// //                             <th className="py-3 px-4 border-b text-left">Gender</th>
// //                             <th className="py-3 px-4 border-b text-left">Medical History</th>
// //                             <th className="py-3 px-4 border-b text-left">Date Created</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {patients.map((patient, index) => (
// //                             <tr key={patient._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
// //                                 <td className="py-2 px-4 border-b">{patient._id}</td>
// //                                 <td className="py-2 px-4 border-b">{patient.name}</td>
// //                                 <td className="py-2 px-4 border-b">{patient.age}</td>
// //                                 <td className="py-2 px-4 border-b">{patient.gender}</td>
// //                                 <td className="py-2 px-4 border-b">{patient.medicalHistory}</td>
// //                                 <td className="py-2 px-4 border-b">{new Date(patient.dateCreated).toLocaleDateString()}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PatientList;


// // src/components/PatientList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PatientList = () => {
//     const [patients, setPatients] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     // Form state
//     const [newPatient, setNewPatient] = useState({
//         name: '',
//         age: '',
//         gender: '',
//         medicalHistory: ''
//     });

//     useEffect(() => {
//         const fetchPatients = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/patients');
//                 setPatients(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Error fetching patient data');
//                 setLoading(false);
//             }
//         };

//         fetchPatients();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewPatient((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/patients', newPatient);
//             setPatients((prev) => [...prev, response.data]);
//             setNewPatient({ name: '', age: '', gender: '', medicalHistory: '' }); // Reset form
//         } catch (err) {
//             setError('Error adding new patient');
//         }
//     };

//     if (loading) return <p className="text-center">Loading...</p>;
//     if (error) return <p className="text-center text-red-500">{error}</p>;

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Patient List</h2>
            
//             {/* Patient Form */}
//             {/* <form onSubmit={handleSubmit} className="mb-6">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                     <input 
//                         type="text" 
//                         name="name" 
//                         value={newPatient.name} 
//                         onChange={handleChange} 
//                         placeholder="Name" 
//                         className="border p-2 rounded"
//                         required
//                     />
//                     <input 
//                         type="number" 
//                         name="age" 
//                         value={newPatient.age} 
//                         onChange={handleChange} 
//                         placeholder="Age" 
//                         className="border p-2 rounded" 
//                         required
//                     />
//                     <select 
//                         name="gender" 
//                         value={newPatient.gender} 
//                         onChange={handleChange} 
//                         className="border p-2 rounded"
//                         required
//                     >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     <input 
//                         type="text" 
//                         name="medicalHistory" 
//                         value={newPatient.medicalHistory} 
//                         onChange={handleChange} 
//                         placeholder="Medical History" 
//                         className="border p-2 rounded"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Add Patient
//                 </button>
//             </form> */}

//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-300">
//                     <thead>
//                         <tr className="bg-blue-500 text-white">
//                             <th className="py-3 px-4 border-b text-left">ID</th>
//                             <th className="py-3 px-4 border-b text-left">Name</th>
//                             <th className="py-3 px-4 border-b text-left">Age</th>
//                             <th className="py-3 px-4 border-b text-left">Gender</th>
//                             <th className="py-3 px-4 border-b text-left">Medical History</th>
//                             <th className="py-3 px-4 border-b text-left">Date Created</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {patients.map((patient, index) => (
//                             <tr key={patient._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
//                                 <td className="py-2 px-4 border-b">{patient._id}</td>
//                                 <td className="py-2 px-4 border-b">{patient.name}</td>
//                                 <td className="py-2 px-4 border-b">{patient.age}</td>
//                                 <td className="py-2 px-4 border-b">{patient.gender}</td>
//                                 <td className="py-2 px-4 border-b">{patient.medicalHistory}</td>
//                                 <td className="py-2 px-4 border-b">{new Date(patient.dateCreated).toLocaleDateString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PatientList;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/patients');
                setPatients(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching patient data');
                setLoading(false);
            }
        };
        fetchPatients();
    }, []);

    const deletePatient = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/patients/${id}`);
            setPatients(patients.filter((patient) => patient._id !== id));
            showNotification('Patient deleted successfully!', 'success');
        } catch (err) {
            showNotification('Error deleting patient!', 'error');
        }
    };

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 3000); // Clear notification after 3 seconds
    };

    const filteredPatients = patients.filter((patient) => {
        const matchesName = patient.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesAge = ageFilter ? patient.age === parseInt(ageFilter) : true;
        const matchesGender = genderFilter ? patient.gender.toLowerCase() === genderFilter.toLowerCase() : true;
        return matchesName && matchesAge && matchesGender;
    });

    const sortedPatients = filteredPatients.sort((a, b) => {
        if (sortField === 'name') return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        if (sortField === 'age') return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
        if (sortField === 'dateCreated') return sortOrder === 'asc' ? new Date(a.dateCreated) - new Date(b.dateCreated) : new Date(b.dateCreated) - new Date(a.dateCreated);
        return 0;
    });

    const paginatedPatients = sortedPatients.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Patient List</h2>

            {/* Notification */}
            {notification.message && (
                <div className={`mb-4 p-2 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {notification.message}
                </div>
            )}

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="border p-2 rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by age"
                    className="border p-2 rounded"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                />
                <select
                    className="border p-2 rounded"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                >
                    <option value="">Filter by gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            {/* Sorting Options */}
            <div className="flex items-center gap-2 mb-4">
                <select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                    <option value="dateCreated">Date Created</option>
                </select>
                <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="border p-2 rounded bg-blue-500 text-white"
                >
                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
            </div>

            {/* Loading, Error, and Patient List */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <div className="overflow-x-auto">
                    {paginatedPatients.map((patient) => (
                        <div key={patient._id} className="bg-white border p-4 rounded-lg shadow-md mb-4">
                            <h3 className="text-xl font-semibold">Name: {patient.name}</h3>
                            <p>Age: {patient.age}</p>
                            <p>Gender: {patient.gender}</p>
                            {/* Link to detailed view */}
                            <Link to={`/patients/${patient._id}`} className="text-blue-500 mt-2">
                                View Details
                            </Link>
                            <button
                                onClick={() => deletePatient(patient._id)}
                                className="text-red-500 ml-4"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PatientList;
