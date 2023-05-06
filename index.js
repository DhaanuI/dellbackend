const express = require("express")
const app = express()
app.use(express.json())
require('dotenv').config()

const cors = require("cors")
app.use(cors())

const { connection } = require("./config/db")
const { noticeRoute } = require("./route/noticeroute")

app.get("/", (req, res) => {
    res.send("Welcome to Backend")
})

app.use("/notice", noticeRoute)

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("DB is connected")
    }
    catch (err) {
        console.log(err, "DB is NOT connected")
    }
    console.log(`Server is running at ${process.env.port}`)
})