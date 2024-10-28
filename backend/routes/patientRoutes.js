const express = require('express');
const { getAllPatients, addPatient, updatePatient, deletePatient } = require('../controllers/patientController');
const router = express.Router();
const Patient = require('../models/Patient'); // Adjust if needed

router.get('/patients', getAllPatients);
router.post('/patients', addPatient);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);



// GET a patient by ID
router.get('/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient details', error });
    }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();



// module.exports = router;
