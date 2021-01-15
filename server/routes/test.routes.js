const router = require('express').Router();
const contr = require('../controller/test.controller');

router.get('/', contr.getTests);
router.post('/', contr.postTest);
router.delete('/:id', contr.deleteTest);
// router.get('/:id', contr.getTest);
// router.put('/:id', contr.editTest);

module.exports = router;
