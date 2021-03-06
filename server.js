//___________________
//Dependencies
//___________________
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const Hotels = require("./models/hotels.js");
const db = mongoose.connection;
const hotelsController = require('./controllers/hotels.js')
const userController = require('./controllers/users_controller.js')
require("dotenv").config();
const session = require('express-session')
const sessionsController = require('./controllers/sessions_controller.js')

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("the connection with mongod is established at", MONGODB_URI);
  }
);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
//___________________

//Middleware/////
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
//___________________
//use public folder for static assets
app.use(express.static("public"));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form
//Controllers goes HERE()
app.use('/hotels', hotelsController)
app.use('/users', userController)


app.use('/sessions', sessionsController)
//___________________
// Routes
//___________________
//localhost:3000
  //heroku connection
   app.get('/', (req, res)=>{
       res.redirect('/hotels')
   })
  


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("Listening on port:", PORT));
