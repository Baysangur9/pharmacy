const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
     
    nameDrug: String,
    nameRecept: Boolean,
    price: Number,
    category: [{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }]

})

const Drug = mongoose.model('Drug', drugSchema)

module.exports = Drug