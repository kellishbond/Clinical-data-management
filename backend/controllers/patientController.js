const Patient = require('../models/Patient');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new patient
exports.addPatient = async (req, res) => {
  const newPatient = new Patient(req.body);
  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a patient
exports.updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
