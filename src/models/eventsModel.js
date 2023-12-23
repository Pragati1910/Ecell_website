const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const eventSchema = new mongoose.Schema({

  isApproved:{
    type:Boolean
  },
  author: {
    type: String,
    required: [true, 'Please provide name of the author '],
    maxlength: 50,
    minlength: 3,
  },
  title: {
    type: String,
    required: [true, 'Please provide title of the blog '],
    maxlength: 50,
    minlength: 3,
  },
  description: {
    type: String,
    required: [true, 'Please provide description '],
  },
  photo:{
        data: Buffer,
        contentType: String
  },
  isModify:{
    type:Boolean,
  },
  modifiedby: {
    type:String
  },
  dateOfModification:{
    type:Date
  },
  eventdetails:{
    type:String
  },
  studentcoordi:{
    type:String
  },
  facultycoordi:{
    type:String
  },
 contactdetails:{
    type:String
  }
});
module.exports = mongoose.model('Event', eventSchema);
