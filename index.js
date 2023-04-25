const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json())

const { connection } = require("./config/db")

const { UserRoute } = require("./route/userRoute")
const { FlightRoute } = require("./route/flightRoute")
const { BookingRoute } = require("./route/bookingroute")

app.use("/", UserRoute)
app.use("/flights", FlightRoute)
app.use("/", BookingRoute)


app.listen(4500, async () => {
    try {
        await connection;
        console.log("DB is connected")
    }
    catch (err) {
        console.log(err)
    }
    console.log("Listening at Port 4500")
})