const mongoose = require('mongoose');

const db = require('../db');

const TestSchema = mongoose.Schema({
  name: {type: String, required: true},
  pendingtests: [{
    id: String,
    title: String
  }],
  completedtests: [{
    id: String,
    title: String,
    result: [{
      percentage: Number,
      questions: [{
        question: String,
        id: String,
        option: String,
        correct: Boolean
      }]
    }]
  }]
});

const student = db.conn.model('student', TestSchema);

module.exports = student;
