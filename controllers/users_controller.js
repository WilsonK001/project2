const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')




users.get('/new', (req, res) =>{
    res.render('users/new.ejs', {currentUser: req.session.currentUser})
    
})
users.post('/', (req, res)=>{
    const hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    req.body.password = hashedPW

    //overwrite the user password with the hashed password, then pass that in to our database
    User.create(req.body, (err, createdUser)=>{
        console.log('user is created', createdUser)
        res.redirect('/sessions/new')
    })

})

module.exports = users