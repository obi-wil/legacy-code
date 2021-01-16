const router = require('express').Router();
const contr = require('../controller/quizz.controller');

router.get('/:id', contr.getQuizz);
router.post('/', contr.checkAnswer);

module.exports = router;
