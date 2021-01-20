const mongoose = require('mongoose');

const db = require('../db');

const TestSchema = mongoose.Schema({
  title: {type: String, required: true},
  questions: [{
    question: {type: String, required: true},
    options: {type: [], required: true},
    answer: {type: String, required: true},
    image: {type: String, required: false}
  }],
  assignedto: {type: [String], required: true, default: []},
  finishedby: {type: [String], required: true, default: []},
  testtype: {type: String, default: "Syllable quiz", required: true}
});

const test = db.conn.model('test', TestSchema);

module.exports = test;
