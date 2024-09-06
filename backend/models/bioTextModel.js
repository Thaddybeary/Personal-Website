const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bioTextSchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('bioText', bioTextSchema)