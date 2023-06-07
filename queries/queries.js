const person = require("../models/personModel ")

//create and save  a record  of model 
const Person  = new PersonModel({
    name : "adel",
    age : "24",
    favoriteFoods : ["Pizza","Is Cream","coffee"]
})

const createAndSavePerson = async() =>{
    try {
        await person.Save()
        console.log(person)
    } catch (error) {
        console.log(error)
    }
}

//create many records with model.create()
const arrayOfPeople = [
 {
       name : "adel",
    age : 24,
    favoriteFoods : ["pizza","sandwitch","crepe"]
 },
 {
    name :"ines",
    age : 28,
    favoriteFoods : ["pizza","sandwitch","crepe"]
 },
 {
    name :"marwen",
    age : 30,
    favoriteFoods : ["pizza","sandwitch","crepe"]
 },
 {
    name :"achraf",
    age : 28,
    favoriteFoods : ["pizza","sandwitch","sablito"]
 }


]

const createManyPeople = async() =>{
    try {
        await PersonModel.create(arrayOfPeople)
        
    } catch (error) {
        console.log(error)
    }
}

//use model.find() to search you database
const searchByName = async(searchByName) =>{
    try {
        const data  = await PersonModel.find({name: `${searchByName}` })
    } catch (error) {
        console.log(error)
    }
}

//use model.findOne() to return a single matching document from your data base 
const searchByFood = async(searchByFood) =>{
    try {
        const data  = await PersonModel.findOne({favoriteFoods:{$all: [`${searchByFood}`]} })
    } catch (error) {
        console.log(error)
    }
}


//use model.findById() to search yout databsa by _Id
const searchById = async(searchById) =>{
    try {
        const data  = await PersonModel.findById(`${searchById}`)
    } catch (error) {
        console.log(error)
    }
}
//perform classic Updates by running find edit ,then 
const UpdatePerson = async(PersonId) =>{
    try {
        const data  = await PersonModel.findById(`${PersonId}`)
        data.favoriteFoods.push("Hamburger")
        data.save()
    } catch (error) {
        console.log(error)
    }
}

const newUpdatePerson = async(PersonName) =>{
    try {
        const data  = await PersonModel.findByIdAndUpdate({name:`${PersonName}`},{age:20},{new:true})
    } catch (error) {
        console.log(error)
    }
}

// delete One document using model.findByIdAndRemove
const removePerson = async(PersonId) =>{
    try {
     await PersonModel.FindByIdAndRemove(`${PersonId}`)
        data.save()
    } catch (error) {
        console.log(error)
    }
}

// mongo and mongoose -  delete many documents  with model.remove()
const removeManyPeople = async(PersonName) =>{
    try {
        await PersonModel.deleteMany({name :`${PersonName}`})
        data.favoriteFoods.push("Hamburger")
        data.save()
    } catch (error) {
        console.log(error)
    }
}

// search query helpers to narrow search results
const chainSearch = async( )=>{
    try {
        const data = await PersoneModel.find({favoriteFoods:{$all:["pizza"]}})
        .sort({name:1})
        .limit(2)
        .select({age: false})
        .exec()
    } catch (error) {
        console.log(error)
    }
}



module.exports = { 
    createAndSavePerson, 
    createManyPeople,
    searchByName,
    searchByFood,
    searchById,
    UpdatePerson,
    newUpdatePerson,
    removePerson,
    removeManyPeople,

}




