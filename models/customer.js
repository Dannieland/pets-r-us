/*
Danielle Taplin
WEB340
customer.js
6/30/2023
customer.js for course long pets-r-us project
*/

const mongoose = require('mongoose');

//declare customer schema with customerId and email fields
let customerSchema = new mongoose.Schema({
    customerId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

//export customer module
module.exports = mongoose.model('Customer', customerSchema);