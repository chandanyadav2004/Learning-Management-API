require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/courses", require("./routes/course.routes"))

app.listen(5001, () => console.log("Server running on port 5001"))