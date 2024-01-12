const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//name
//email
//contact number
//idea

const formSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  phoneno:{
    type:Number,
    required:[true,'Please provide your phone number'],
    match:[
        /^\d{10}$/,
        'Please provide a valid phone number',
    ],
    unique:true,
  },
  idea:{
    type:String,
    required:[true,'Please provide us with your idea']
  }
});
module.exports = mongoose.model('Form', formSchema);
