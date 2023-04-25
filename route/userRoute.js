const express = require("express")
const bcrypt = require("bcrypt")
const UserRoute = express.Router()
UserRoute.use(express.json());
const { UserModel } = require("../model/usermodel.model")


UserRoute.get("/allusers", async (req, res) => {
    try {
        const data = await UserModel.find();
        res.send({ "USERS": data })
    }
    catch (error) {
        res.send({ "error": "not able to get USERS data" })
    }
})


UserRoute.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async function (err, securedPass) {
            const data = new UserModel({ name, email, password: securedPass })
            await data.save()
            res.send({ "message": "User added to Database" })
        });
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "Unable to add User" })
    }

})

UserRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const data = await UserModel.findOne({ email });
    try {
        bcrypt.compare(password, data.password, function (err, result) {
            if (result) {
                res.send({ "message": "User is Loggedin" })
            }
            else {
                res.send({ "message": "Incorrect Credentials" })
            }
        });
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "ERROR WHILE LOGGING IN" })
    }

})



module.exports = {
    UserRoute
}