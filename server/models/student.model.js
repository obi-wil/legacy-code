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
    result: {
      percentage: Number,
      questions: [{
        question: String,
        id: String,
        option: String,
        correct: Boolean
      }]
    }
  }]
});

const student = db.conn.model('student', TestSchema);

module.exports = student;


// {
//   "name":"Sara Gómez",
//   "pendingtests": [
//       {
//       "id":"600020b2c3ba22ab842c531f",
//       "title":"Count the syllables! (2)"
//       },
//       {
//       "id":"6000a17770723cc5f2280620",
//       "title":"Count the syllables! (3)"
//       }
//     ],
//     "completedtests": [
//       {
//       "id":"60001fcac3ba22ab842c5319",
//       "title":"Count the syllables! (1)",
//       "result":
//           {
//             "percentage":80,
//             "questions": [
//             {
//                 "option":"3",
//                 "id": "60001fcac3ba22ab842c531a",
//                 "question": "PLAYGROUND",
//                 "correct": true
//             },
//             {
//                 "correct":true,
//                 "id": "60001fcac3ba22ab842c531b",
//                 "question": "CORONAVIRUS",
//                 "option": "5"
//             },
//             {
//                 "option":"1",
//                 "id": "60001fcac3ba22ab842c531c",
//                 "question": "MOUSE",
//                 "correct":true
//             },
//             {
//                 "correct":false,
//                 "id": "60001fcac3ba22ab842c531d",
//                 "question": "WATERMELON",
//                 "option": "2"
//             },
//             {
//                 "correct":true,
//                 "id": "60001fcac3ba22ab842c531e",
//                 "question": "BANANA",
//                 "option":"3"
//             }
//           ]
//           }
//         ,
        
      
//       }
//     ]
// }
