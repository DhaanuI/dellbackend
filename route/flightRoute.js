const express = require("express")
const FlightRoute = express.Router()
FlightRoute.use(express.json());
const { FlightModel } = require("../model/flightmodel.model")

FlightRoute.get("/", async (req, res) => {
    try {
        const data = await FlightModel.find();
        res.send({ "Flights Data": data })
    }
    catch (error) {
        res.send({ "error": "not able to get flights data" })
    }
})

FlightRoute.get("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        const data = await FlightModel.findOne({ _id: ID });
        res.send({ "Data": data })
    }
    catch (error) {
        res.send({ "error": "not able to get Specific flight data" })
    }
})

FlightRoute.post("/", async (req, res) => {
    const { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    try {
        const data = new FlightModel({ airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price })
        await data.save()
        res.send({ "message": "Flight Data added to Database" })
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "Unable to add Flight Data" })
    }
})

FlightRoute.patch("/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await FlightModel.findOneAndUpdate({ _id: ID }, payload);
        res.send("Specific Flight information is updated")
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "Unable to Edit Flight Data" })
    }
})

FlightRoute.delete("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await FlightModel.findOneAndDelete({ _id: ID });
        res.send("Specific Flight information is DELETED")
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "Unable to DELETE Flight Data" })
    }
})




module.exports = {
    FlightRoute
}