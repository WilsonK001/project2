const bcrypt = require('bcrypt')
const express = require('express')
const Hotel = require('../models/hotels.js')
const sessions = express.Router()
const User = require('../models/users.js')



sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
  })


sessions.post('/', (req, res) =>{
     // username is found and password matches
  // successful log in

  // username is not found - who cares about password if you don't have a username that is found?
  // unsuccessful login

  // username found but password doesn't match
  // unsuccessful login


  //Step 1 Look for the username

  User.findOne({username: req.body.username}, (error, foundUser)=>{
      //Database error
      if(error){
          console.log(error)
          res.send('uh oh the database had a problem')
      } else if(!foundUser) {
          // if found user is undefined/null not found etc
          res.send('<a href="/">Sorry, no user found</a>')
      } else {
       // user is found yay!
      // now let's check if passwords match
        if(bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser
            //add the user to our session
            res.redirect('/hotels')
        } else {
            //passwords do not match
            res.send('<a href="/"> Awww, im so sorry password doesnt match. Sign up or log in again</a>')
        }
        }  
  })
})
sessions.delete('/', (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('/hotels')
    })
})



module.exports = sessions