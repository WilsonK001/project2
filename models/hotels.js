const mongoose = require('mongoose')

//establishingg the relationship betweeen the two models
const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    rating:{type: Number, max: 5},
    description: String,
    img: String,
    rooms:[ { 
        roomNumber: Number, 
        size: String, 
        price: Number, 
        availability: Boolean,
        img: []
      } ]

})
const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel

