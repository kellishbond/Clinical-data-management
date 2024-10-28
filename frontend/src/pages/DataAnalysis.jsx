// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';

// // Register necessary components from Chart.js
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const DataAnalysis = () => {
//   const [patientData, setPatientData] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients'); // Adjust the endpoint as needed
//         console.log("Fetched Patient Data:", response.data); // Log fetched data
//         setPatientData(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data:", error);
//         setError("Failed to fetch patient data."); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchPatientData();
//   }, []);

//   // Prepare the data for the chart
//   const chartData = {
//     labels: patientData.map(patient => patient.name), // Using the 'name' field
//     datasets: [
//       {
//         label: 'Patient Age',
//         data: patientData.map(patient => patient.age), // Using the 'age' field
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Patient Age Over Time',
//       },
//     },
//   };

//   // Loading and error handling in the return statement
//   return (
//     <div>
//       <h2>Data Analysis</h2>
//       {loading && <p>Loading data...</p>} {/* Loading state */}
//       {error && <p>{error}</p>} {/* Error message */}
//       {patientData.length > 0 && !loading ? (
//         <Line options={options} data={chartData} />
//       ) : null}
//     </div>
//   );
// };

// export default DataAnalysis;


// src/pages/DataAnalysis.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataAnalysis = () => {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get('https://clinical-data-management-backend.onrender.com/api/patients');
        setPatientData(response.data);
      } catch (error) {
        setError("Failed to fetch patient data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  const chartData = {
    labels: patientData.map(patient => patient.name),
    datasets: [
      {
        label: 'Patient Age',
        data: patientData.map(patient => patient.age),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart resizes properly
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patient Age Over Time',
      },
    },
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Data Analysis</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {patientData.length > 0 && !loading ? (
        <div className="h-64 md:h-96">
          <Line options={options} data={chartData} />
        </div>
      ) : null}
    </div>
  );
};

export default DataAnalysis;
