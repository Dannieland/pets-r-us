/*
Danielle Taplin
WEB340
index.js
6/18/2023
index.js for course long pets-r-us project
*/

//enable strict mode
"use strict";

//require use of express and path
const express = require('express');
const path = require('path');

//declare a variable for express usage
const app = express();

//set port to 3000
const PORT = process.env.PORT || 3000;

//access images folder under public to add images to the website
app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));

//access views folder to add ejs files to the site
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// navigate to the sites views
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/grooming', function(req, res) {
    res.render('grooming', { });
 });

//set app to listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});