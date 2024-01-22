const dotenv = require("dotenv")
dotenv.config({
    path:'./.env'
})

require("./db/db.connect.js")
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const patientRouter = require("./routes/patient.routes.js")
const wardRouter = require("./routes/ward.routes.js")

const app = express()
const PORT = process.env.port || 5000

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/patients", patientRouter)
app.use("/ward", wardRouter)


app.get('/', (req, res) => {
  res.send("Hello")
})

app.use( (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({error: "Something went wrong"})
})

app.use( (req, res) => {
  res.status(404).json({error: "Route not found"})
})


app.listen(`${PORT}`, (req, res) => {
  console.log(`Server is running on port: ${PORT}`)
})
