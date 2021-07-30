const { Router } = require('express');
const express = require('express');
const router = express.Router()
const Hotels = require('../models/hotels.js')
const manyHotels = require("../models/seed_hotel.js");

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }


///////NEW PAGE//////

router.get('/new', (req, res) => {
    res.render('new.ejs', {currentUser: req.session.currentUser})
        
  });
  
  

  
  //////EDIT PAGE//////
  
  router.get('/:index/edit', (req, res) => {
    Hotels.findById(req.params.index, (error, foundHotel) => {
      res.render("edit.ejs", {
        hotel: foundHotel,
        currentUser: req.session.currentUser
        
      });
    });
  });
  ////////DELETE////////
  router.delete('/:index', isAuthenticated, (req, res) => {
    Hotels.findByIdAndRemove(req.params.index, (error, deletedHotel) => {
      res.redirect("/hotels");
    });
  });
   
  
  /////UPDATE////after index reserve
  router.put('/:index/reserve', isAuthenticated, (req, res) => {
    Hotels.findByIdAndUpdate(
      req.params.index,
      req.body,
      { new: true },
      (error, updateModel) => {
        res.redirect("/hotels")
        
      }
    )
  })


  ///////INDEX PAGE////////////
  router.get('/', (req, res) => {
    //   res.send('Hello World!');
    Hotels.find({}, (error, hotels) => {
      res.render('index.ejs', {
        allTheHotels: hotels,
        currentUser: req.session.currentUser
      })
    })
  })
  
  /////CREATE ROUTE/////
  router.post('/', isAuthenticated, (req, res) => {
    Hotels.create(req.body, (error, createdHotel) => {
      res.redirect("/hotels");
    });
  });
  
  /////////SHOW PAGE/////
  
  router.get('/:index', (req, res) => {
    Hotels.findById(req.params.index, (error, foundHotel) => {
      res.render("show.ejs", {
        hotel: foundHotel,
        currentUser: req.session.currentUser
      });
    });
  });
  


  


//   router.get('/seed', (req, res)=>{
//       res.send('Hello')

      
//   })



module.exports = router