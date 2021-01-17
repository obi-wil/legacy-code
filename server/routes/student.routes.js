const router = require('express').Router();
const contr = require('../controller/student.controller');

router.post('/', contr.postStudent);
router.get('/', contr.getStudents);
router.get('/:id', contr.getStudent);
// router.post('/', contr.postTest);
router.put('/completed/:id', contr.updateCompleteStudent);
// router.delete('/:id', contr.deleteTest);

module.exports = router;
