const { Patient } = require("../models/patient.model.js");

const addPatient = async (patientData) => {
  try {
    const newPatient = new Patient(patientData);

    const savedPatient = await newPatient.save();

    if (savedPatient) {
      console.log("Patient added successfully", savedPatient);
      return savedPatient;
    } else {
      console.log("Unable to add patient to DB");
    }
  } catch (error) {
    console.error("Error while adding Patient", error.message);
  }
};

const getPatients = async () => {
  try {
    const allPatients = await Patient.find();

    console.log("Patients Fetched Successfully From DB", allPatients);

    return allPatients;
  } catch (error) {
    console.error("Error while fetching Patients from database", error.message);
  }
};

const updatePatient = async (patientId, patientToBeUpdated) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      patientToBeUpdated,
    );
    if (updatedPatient) {
      console.log("Patient Updated Successfully", updatedPatient);
      return updatedPatient;
    } else {
      console.log("Unable to update Patient");
    }
  } catch (error) {
    console.error("Error while updating the Patient", error.message);
  }
};

const deletePatient = async (patientId) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(patientId);
    if (deletedPatient) {
      console.log("Patient Deleted Successfully", deletedPatient);
      return deletedPatient;
    } else {
      console.log("Unable to delete Patient");
    }
  } catch (error) {
    console.error("Error while deleting the Patient", error);
  }
};

module.exports = {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
};
