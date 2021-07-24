const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/Connection');
const route = express.Router();

route.post('/', async (req, res) => {
  const { name, phone,email,message } = req.body;
  let user = {};
  user.name = name;
  user.phone = phone;
  user.email= email;
  user.message=message;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});


// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });

// const Contact = mongoose.model('Contact', contactSchema);