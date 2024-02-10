const { Ward } = require("../models/ward.model.js");

const addWard = async (wardData) => {
  try {
    const newWard = new Ward(wardData);
    const savedWard = await newWard.save();

    if (savedWard) {
      console.log("Ward added successfully:", savedWard);
      return savedWard;
    } else {
      console.log("Unable to add ward to DB");
    }
  } catch (error) {
    console.error("Error while adding Ward:", error.message);
  }
};

const getWards = async () => {
  try {
    const allWards = await Ward.find();
    console.log("Wards fetched successfully from DB:", allWards);
    return allWards;
  } catch (error) {
    console.error("Error while fetching Wards from database:", error.message);
  }
};

const updateWard = async (wardId, wardToBeUpdated) => {
  try {
    const updatedWard = await Ward.findByIdAndUpdate(wardId, wardToBeUpdated, {new : true});

    if (updatedWard) {
      console.log("Ward updated successfully:", updatedWard);
      return updatedWard;
    } else {
      console.log("Unable to update Ward");
    }
  } catch (error) {
    console.error("Error while updating the Ward:", error.message);
  }
};

const deleteWard = async (wardId) => {
  try {
    const deletedWard = await Ward.findByIdAndDelete(wardId);

    if (deletedWard) {
      console.log("Ward deleted successfully:", deletedWard);
      return deletedWard;
    } else {
      console.log("Unable to delete Ward");
    }
  } catch (error) {
    console.error("Error while deleting the Ward:", error.message);
  }
};

module.exports = {
  getWards,
  addWard,
  updateWard,
  deleteWard,
};
