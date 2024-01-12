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
    required: [true, 'Please provide title of the event '],
    maxlength: 50,
    minlength: 3,
  },
  description: {
    type: String,
    required: [true, 'Please provide description '],
  },
  photo:{
    type:String,
    required: [true, 'Please provide description '],
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
  studentcoordinator1:{
    type:String
  },
  studentcoordinator2:{
    type:String
  },
  facultycoordinator:{
    type:String
  },
  contactdetails1:{
    type:String
  },
  contactdetails2:{
    type:String
  }
});
module.exports = mongoose.model('Event', eventSchema);
