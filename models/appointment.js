/*
Danielle Taplin
WEB340
appointment.js
7/15/2023
appointment.js for course long pets-r-us project
*/

//require mongoose
const mongoose = require('mongoose');

//declare appointment schema including userName, firstName, lastName, email, and service fields
let appointmentSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true }
});



//export the appointment module
module.exports = mongoose.model('Appointment', appointmentSchema);