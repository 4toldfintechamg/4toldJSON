const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

// Import routes
let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/external_data_clients', { useNewUrlParser: true});

var db = mongoose.connection;

// Added check for DB connection
if(!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")

//Public folder
app.use('/public', express.static('public'));

//route for the default homepage
app.get('/', (req, res) => {
  res.render('main');
});


// Use Api routes in the App
app.use('/api', apiRoutes);

//Server Port
app.listen(8000, () => {
  console.log('App is runnning on port 8000!')
});
