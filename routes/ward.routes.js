const express = require("express");
const {
  getWards,
  addWard,
  updateWard,
  deleteWard,
} = require("../controllers/ward.controller.js");

const wardRouter = express.Router();

wardRouter.get("/", async (req, res) => {
  try {
    const wards = await getWards();
    res.status(200).json({ message: "Wards Retrieved Successfully", wards });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve wards from database", error });
  }
});

wardRouter.post("/", async (req, res) => {
  try {
    const wardData  = req.body;
    const addedWard = await addWard(wardData);
    if (addedWard) {
      res.status(200).json({ message: "Ward added successfully", addedWard });
    } else {
      res.status(404).json({ message: "Failed to Add Ward to Db" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while adding Ward to DB", error });
  }
});

wardRouter.post("/:wardId", async (req, res) => {
  try {
    const  wardData  = req.body;
    const wardId = req.params.wardId;
    const updatedWard = await updateWard(wardId, wardData);
    if (updatedWard) {
      res
        .status(200)
        .json({ message: "Ward updated successfully", updatedWard });
    } else {
      res.status(404).json({ message: "Failed to Update Ward to Db" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while Updating Ward", error });
  }
});

wardRouter.delete("/:wardId", async (req, res) => {
  try {
    const wardId = req.params.wardId;
    const deletedWard = await deleteWard(wardId);
    if (deletedWard) {
      res
        .status(200)
        .json({ message: "Ward deleted successfully", deletedWard });
    } else {
      res.status(404).json({ message: "Failed to Delete Ward in Db" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while deleting Ward to DB", error });
  }
});

module.exports = wardRouter;
