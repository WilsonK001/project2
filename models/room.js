//Creating a room schema to have a relationship with the hotel
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    hotel_id: String,
    name: String,
    size: Number,
    price: Number,
    availability: Boolean,
    img: String
    

})
const Room = mongoose.model('Room', roomSchema)

module.exports = Room
