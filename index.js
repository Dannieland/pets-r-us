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



//connect to MongoDB and output a message stating success for failure to do so
mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

//access the images folder under public to add images to the site
app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));

//access views under the public folder to add views to the site
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// navigation to the site's views
app.get('/', (req, res) => {
   res.render('index', {
      title: 'Pets-R-Us: Home'
  })
})

app.get('/grooming', function(req, res) {
    res.render('grooming', {
      title: 'Pets-R-Us: Grooming'
     });
 });

 app.get('/boarding', function(req, res) {
    res.render('boarding', {
      title: 'Pets-R-Us: Boarding'
     });
 });

 app.get('/training', function(req, res) {
    res.render('training', {
      title: 'Pets-R-Us: Training'
     });
 });

 app.get('/registration', function(req, res) {
    res.render('registration', {
      title: 'Pets-R-Us: Register'
     });
 });

 app.get('/booking', function(req, res) {
    let jsonFile = fs.readFileSync('./public/data/services.json');
    let services = JSON.parse(jsonFile);
    res.render('booking', {
      title: 'Pets-R-Us: Booking',
      services: services
     });
 });

 //display customers page and get all customers from the database
 app.get('/customers', async (req, res) => {
    const allCustomers = await Customer.find()
            res.render('customers', {
                title: 'Pets-R-Us Customers: List',
                customers: allCustomers
         })
})




 //post request for registration
 app.post('/customers', (req, res, next) => {
   //declare new customer with  customerId and email
   const newCustomer = new Customer({
       customerId: req.body.customerId,
       email: req.body.email
   });

   //output new Customer to the console
   console.log(newCustomer);

   //register customer to database
   Customer.create(newCustomer)
   .then((result) => {
      //if successful, redirect to landing page
      res.render('index', {
         title: 'Pets-R-Us: Home'
     })
   })
   .catch((err) => {
      //if unsuccessful, output error message to console
      console.log(err);
   })
})

//post request for appointment booking
app.post('/appointments', (req, res, next) => {
    //declare  new appointment object
    const newAppointment = new Appointment({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        service: req.body.service
    });
 
    //output the new Appointment to the console
    console.log(newAppointment);
 
    //register appointment to database
    Appointment.create(newAppointment)
    .then((result) => {
       //if successful, redirect to landing page
       res.render('index', {
          title: 'Pets-R-Us: Home'
      })
    })
    .catch((err) => {
       //if unsuccessful, output error message to console
       console.log(err);
    })
 })

//set the app to listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});