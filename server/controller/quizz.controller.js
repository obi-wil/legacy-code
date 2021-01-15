const test = require('../models/test.model');

const checkAnswer = async (req, res) => {

  const { testid, answer } = req.body;
  let currentTest;

  if (req.session) {
    // Fetch whole test from mongoose
    try {
      currentTest = await test.findOne({_id: testid});
    } catch (e) {
      res.status(500);
      res.send(e);
    }
    req.session[testid] = currentTest;
  } 
  if (req.test) {
    currentTest = req.test;
  }

  const { qid } = req.params;

  validateAnswer(currentTest, qid, answer);
  


  res.send(validateAnswer(currentTest, qid, answer))
};

// Return quizz (no answers)
const getQuizz = async (req, res) => {
  try {
    const currentTest = await test.findOne({_id: req.params.id});
    const quizz = hideAnswers(currentTest);
    res.send(quizz);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { getQuizz, checkAnswer };

const hideAnswers = testObj => {
  testObj.questions = testObj.questions.map((q) => {
    q.options = q.options.map((opt) => opt.op);
    q.answer = '';
    return q;
  });
  return testObj;
};

const validateAnswer = (test, qid, answer) => {
  for (let q of test.questions) {
    if (q._id == qid && q.answer === answer) return true;
  }
  return false;
};
