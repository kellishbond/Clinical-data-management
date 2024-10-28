// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();

// const patientRoutes = require('./routes/patientRoutes'); // Import patient routes

// // Middleware
// app.use(express.json()); // For parsing application/json

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log('Error:', err));

// // Sample API Endpoint
// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

// // Use Patient Routes
// app.use('/api', patientRoutes); // Attach patient routes to the '/api' path

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors package
// const Patient = require('./models/Patient'); // Adjust the path as needed
// require('dotenv').config();

// const app = express();

// const patientRoutes = require('./routes/patientRoutes'); // Import patient routes

// // Middleware
// const corsOptions = {
//     origin: 'http://localhost:5173', // Allow requests from this origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//     credentials: true, // Allow credentials
// };
// app.use(cors(corsOptions)); // Use CORS with options
// app.use(express.json()); // For parsing application/json

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log('Error:', err));

// // Sample API Endpoint
// app.get('/', (req, res) => {
//     res.send('API is running...');
// });
// // POST route for adding a new patient
// app.post('/api/patients', async (req, res) => {
//     const { name, age, gender, medicalHistory } = req.body;
//     const newPatient = new Patient({ name, age, gender, medicalHistory });
//     try {
//         await newPatient.save();
//         res.status(201).json(newPatient);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to add patient', error: err });
//     }
// });
// // Use Patient Routes
// app.use('/api', patientRoutes); // Attach patient routes to the '/api' path

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Patient = require('./models/Patient'); // Adjust this path if needed
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log('Error:', err));

// // API Routes

// // 1. Get All Patients
// app.get('/api/patients', async (req, res) => {
//     try {
//         const patients = await Patient.find();
//         res.json(patients);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching patients', error: err });
//     }
// });

// // 2. Get Patient by ID
// app.get('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const patient = await Patient.findById(id);
//         if (!patient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json(patient);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching patient details', error: err });
//     }
// });

// // 3. Add a New Patient
// app.post('/api/patients', async (req, res) => {
//     const { name, age, gender, medicalHistory } = req.body;
//     const newPatient = new Patient({ name, age, gender, medicalHistory });
//     try {
//         await newPatient.save();
//         res.status(201).json(newPatient);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to add patient', error: err });
//     }
// });

// // 4. Update a Patient
// app.put('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, age, gender, medicalHistory } = req.body;
//     try {
//         const updatedPatient = await Patient.findByIdAndUpdate(id, { name, age, gender, medicalHistory }, { new: true });
//         if (!updatedPatient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json(updatedPatient);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to update patient', error: err });
//     }
// });

// // 5. Delete a Patient
// app.delete('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedPatient = await Patient.findByIdAndDelete(id);
//         if (!deletedPatient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json({ message: 'Patient deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to delete patient', error: err });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Patient = require('./models/Patient'); // Adjust this path if needed
// require('dotenv').config();

// const app = express();

// // Middleware
// const corsOptions = {
//     origin: 'http://localhost:5173', // Update to production frontend URL in deployment
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Health Check Endpoint (Optional)
// app.get('/health', (req, res) => {
//     res.status(200).json({ status: 'Server is healthy' });
// });

// // API Routes

// // 1. Get All Patients
// app.get('/api/patients', async (req, res) => {
//     try {
//         const patients = await Patient.find();
//         res.json(patients);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching patients', error: err });
//     }
// });

// // 2. Get Patient by ID
// app.get('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const patient = await Patient.findById(id);
//         if (!patient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json(patient);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching patient details', error: err });
//     }
// });

// // 3. Add a New Patient
// app.post('/api/patients', async (req, res) => {
//     const { name, age, gender, medicalHistory } = req.body;
//     const newPatient = new Patient({ name, age, gender, medicalHistory });
//     try {
//         await newPatient.save();
//         res.status(201).json(newPatient);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to add patient', error: err });
//     }
// });

// // 4. Update a Patient
// app.put('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, age, gender, medicalHistory } = req.body;
//     try {
//         const updatedPatient = await Patient.findByIdAndUpdate(id, { name, age, gender, medicalHistory }, { new: true });
//         if (!updatedPatient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json(updatedPatient);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to update patient', error: err });
//     }
// });

// // 5. Delete a Patient
// app.delete('/api/patients/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedPatient = await Patient.findByIdAndDelete(id);
//         if (!deletedPatient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json({ message: 'Patient deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to delete patient', error: err });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });







const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Patient = require('./models/Patient'); // Adjust this path if needed
require('dotenv').config();

const app = express();

// Middleware
const corsOptions = {
     origin: [
        'https://clinical-data-management-frontend.onrender.com', // Your deployed frontend
        'http://localhost:5173', // Your local frontend
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Health Check Endpoint (Optional)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy' });
});

// API Routes

// 1. Get All Patients
app.get('/api/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching patients', error: err });
    }
});

// 2. Get Patient by ID
app.get('/api/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching patient details', error: err });
    }
});

// 3. Add a New Patient with prescriptions and treatments
app.post('/api/patients', async (req, res) => {
    const { name, age, gender, medicalHistory, prescriptions = [], treatments = [] } = req.body;
    const newPatient = new Patient({ name, age, gender, medicalHistory, prescriptions, treatments });
    try {
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add patient', error: err });
    }
});

// 4. Update a Patient including prescriptions and treatments
app.put('/api/patients/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, medicalHistory, prescriptions = [], treatments = [] } = req.body;
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            id,
            { name, age, gender, medicalHistory, prescriptions, treatments },
            { new: true }
        );
        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(updatedPatient);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update patient', error: err });
    }
});

// 5. Delete a Patient
app.delete('/api/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPatient = await Patient.findByIdAndDelete(id);
        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json({ message: 'Patient deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete patient', error: err });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
