const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const KeywordSchema = new Schema({
  keyword: {
    type: String,
    required: [true, 'Please enter keyword.'],
    lowercase: true,
    trim: true
  }
});

const KeywordModel = mongoose.model('Keyword', KeywordSchema);
module.exports = KeywordModel;