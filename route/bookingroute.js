const express = require("express")
const BookingRoute = express.Router()
BookingRoute.use(express.json());
const { BookingModel } = require("../model/bookingmodel.model")

BookingRoute.get("/dashboard", async (req, res) => {
    try {
        const data = await BookingModel.find();
        res.send({ "Bookings": data })
    }
    catch (error) {
        res.send({ "error": "not able to get BOOKINGS data" })
    }
})

BookingRoute.post("/booking", async (req, res) => {
    const { user, flight } = req.body;
    try {
        const data = new BookingModel({ user, flight })
        await data.save()
        res.send({ "message": "New Bookings added to Database" })
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "Unable to BOOK" })
    }
})

module.exports = {
    BookingRoute
}