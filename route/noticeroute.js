const express = require("express")
const noticeRoute = express.Router();
noticeRoute.use(express.json())

const { NoticeModel } = require("../model/noticemodel")

noticeRoute.get("/", async (req, res) => {
    try {
        const data = await NoticeModel.find()
        res.send({ "Notices": data })
    }
    catch (err) {
        res.send({ "error": err })
    }
})


noticeRoute.post("/", async (req, res) => {
    const { name, title, description } = req.body
    if (name && title && description) {
        try {

            const today = new Date()
            const val = today.getDate()
            const data = new NoticeModel({ name, title, description, date: val })
            await data.save()
            res.send({ "message": "Notice added" })
        }
        catch (err) {
            res.send({ "error": err })
        }
    }

})


noticeRoute.patch("/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        const data = await NoticeModel.findOneAndUpdate({ _id: ID }, payload)
        res.send({ "Message": "Notice modified" })
    }
    catch (err) {
        res.send({ "error": err })
    }
})


noticeRoute.delete("/:id", async (req, res) => {
    const ID = req.params.id
    try {
        const data = await NoticeModel.findOneAndDelete({ _id: ID })
        res.send({ "Message": "Notice Deleted" })
    }
    catch (err) {
        res.send({ "error": err })
    }
})



module.exports = {
    noticeRoute
}