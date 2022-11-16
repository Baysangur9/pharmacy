const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: String,
    cash: Number,
    recept: Boolean,
    basket:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Drug"
    }],
    totalPrice: {
        type:Number,
        default: 0
    }
})

const Client = mongoose.model('Client',clientSchema)

module.exports = Client