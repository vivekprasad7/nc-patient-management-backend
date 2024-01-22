const express = require("express");

const {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient.controller.js");

const patientRouter = express.Router();

patientRouter.get("/", async (req, res) => {
  try {
    const patients = await getPatients();
    res
      .status(200)
      .json({ message: "Patients Retrieved Successfully", patients });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve patients from database", error });
  }
});

patientRouter.post("/", async (req, res) => {
  try {
    const { patientData } = req.body;
    const addedPatient = await addPatient(patientData);
    if (addedPatient) {
      res
        .status(200)
        .json({ message: "Patient added successfully", addedPatient });
    } else {
      res.status(404).json({ message: "Failed to Add Patient to Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while adding Patient to DB", error });
  }
});

patientRouter.post("/:patientId", async (req, res) => {
  try {
    const { patientData } = req.body;
    const patientId = req.params.patientId;
    const updatedPatient = await updatePatient(patientId, patientData);
    if (updatedPatient) {
      res
        .status(200)
        .json({ message: "Patient updated successfully", updatedPatient });
    } else {
      res.status(404).json({ message: "Failed to Update Patient to Db" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while Updating Patient", error });
  }
});

patientRouter.delete("/:patientId", async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const deletedPatient = await deletePatient(patientId);
    if (deletedPatient) {
      res
        .status(200)
        .json({ message: "Patient deleted successfully", deletedPatient });
    } else {
      res.status(404).json({ message: "Failed to Delete Patient in Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting Patient to DB", error });
  }
});

module.exports = patientRouter;
