const mongoose = require("mongoose")

const wardSchema = new mongoose.Schema({
  wardNumber: {
    type:String,
    required:true,
  },
  capacity: {
    type:Number,
    required:true,
  },
  specialization:{
    type: String,
    enum:["Pediatrics", "Surgery", "ICU"],
    required:true,
  }
}, {timestamps:true})

const Ward = mongoose.model('Ward', wardSchema)

module.exports = {
  Ward
}