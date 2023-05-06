const mongoose = require("mongoose")
const noticeSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    date: Date
})

const NoticeModel = mongoose.model("notice", noticeSchema)

module.exports = {
    NoticeModel
}