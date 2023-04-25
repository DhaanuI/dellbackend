const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://dhaanu:dhaanu@cluster0.otixfh5.mongodb.net/mocksix?retryWrites=true&w=majority")

module.exports = {
    connection
}