const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const superuserSchema = new mongoose.Schema({

  name:{
    type:String,
    required: [true, 'Please provide the name']
  },
  createdby:{
    type:String
  },
  creathedon:{
    type:Date
  }
});
module.exports = mongoose.model('Superuser', superuserSchema);
