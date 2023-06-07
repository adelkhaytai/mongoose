const mongoose = require("mongoose")
require("dotenv").config({path: ".env"})

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connectd")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB