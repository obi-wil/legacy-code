const router = require('express').Router();
const contr = require('../controller/test.controller');

router.get('/', contr.getTests);
router.post('/', contr.postTest);
router.get('/:id', contr.getTest);
router.put('/:id', contr.editTest);
router.delete('/:id', contr.deleteTest);

module.exports = router;
