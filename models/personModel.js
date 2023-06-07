const mongoose = require("mongoose")

const PersonSchema  = new mongoose.Schema({
    name: {type:String, required:true},
    age : Number,
    favoritFoods : [string ]
})



module.exports = mongoose.model("Person", PersonSchema)