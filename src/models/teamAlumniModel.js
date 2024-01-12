const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide your VIT email'],
    match: [
      /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/,
      'Please provide a valid email',
    ],
    unique: true,
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
 image:{
      data: Buffer,
      contentType: String
  },
  designation:{
    type:String,
    required:[true,'Please provide your designation']
  },
  batch:{
    type:Number,
    requires:[true,'please provide your passing out year']
  }

});
module.exports = mongoose.model('Team', teamSchema);
