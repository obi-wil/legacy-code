const mongoose = require('mongoose');

const db = require('../db');

const TestSchema = mongoose.Schema({
  title: {type: String, required: true},
  questions: [{
    question: {type: String, required: true},
    options: {type: [], required: true},
    answer: {type: String, required: true}
  }],
  assignedto: [String],
  finishedby: [String],
  type: {type: String, default: "syllable quiz", required: true}
});

const test = db.conn.model('test', TestSchema);

module.exports = test;
