const express = require('express')
const connectDB = require('./config/connectDB')
require("dotenv").config({path: "./config/.env"})
const queries = require("./queries/queries")

connectDB()

// queries.createAndSavePerson()
// queries.create.ManyPeople()
// queries.searchByName("Adel")
// queries.searchByFood("coffe")
// queries.searchById("6616111516b1651681v668f5")
// queries.updatePeron("6616gs11516b1651681v668f5")
// queries.newUpdatePerson("Adel")
// queries.removePerson("6616111516b1651681v668f5")
// queries.removeManyPeople("Achref")
// queries.searchByName("adel")
// queries.chain.search()

const app = express()

const PORT = process.env.PORT

app.listen(PORT , (error)=>{
    error ? console.log(error)
          : console.log(`server runing or port ${PORT}`)
})









