const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const blogSchema = new mongoose.Schema({

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
  body: {
    type: String,
    required: [true, 'Please provide the body of the body '],

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
  like:{
    type:Number
  }
});
module.exports = mongoose.model('Blog', blogSchema);
