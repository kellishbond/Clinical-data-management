const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  medicalHistory: { type: String },
  prescriptions: [{ type: String }],
  treatments: [{ type: String }],
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Patient', PatientSchema);
