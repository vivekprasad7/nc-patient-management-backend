const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  age: {
    type:Number,
    required:true,
  },
  medicalHistory:{
    type: String,
    required:true,
  },
  gender:{
    type: String,
    enum:["Male", "Female", "Other"],
    required:true,
  },
  contact:{
    type:String,
    required:true,
  },
  assignedWard:{
    type: String,
    enum: ["First","Second","Third","Fourth","Fifth"],
    required:true,
  }, 
}, {timestamps:true})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = {
  Patient
}