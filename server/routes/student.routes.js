const router = require('express').Router();
const contr = require('../controller/student.controller');

router.post('/', contr.postStudent);
router.get('/', contr.getStudents);
// router.post('/', contr.postTest);
// router.get('/:id', contr.getTest);
// router.put('/:id', contr.editTest);
// router.delete('/:id', contr.deleteTest);

module.exports = router;
