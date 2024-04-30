const mongoose = require('mongoose')


const designSchema = mongoose.Schema({
    
imageurl : String,
name : String,
type : String,
designer : String,
Collection : String,
likes : Number

})

const userModel = mongoose.model("design",designSchema)

module.exports = userModel;