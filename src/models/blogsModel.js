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
  photo:{
    type:String,
    required: [true, 'Please provide the picture of the blog '],
  },
  body: {
    type: String,
  },
  isModify:{
    type:Boolean,
  },
  modifiedby: {
    type:String
  },
  dateofUpload:{
    typr:String
  },
  dateOfModification:{
    type:String
  },
  like:{
    type:Number
  }
});
module.exports = mongoose.model('Blog', blogSchema);
