// src/api/api.js
import axios from 'axios';

const API_URL = 'https://clinical-data-management-backend.onrender.com/api/'; // Adjust based on your backend URL

export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

// Add more API functions as needed
