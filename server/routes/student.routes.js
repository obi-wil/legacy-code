const router = require('express').Router();
const contr = require('../controller/student.controller');

router.post('/', contr.postStudent);
router.post('/multiple', contr.postStudents);
router.get('/', contr.getStudents);
router.get('/:id', contr.getStudent);
router.put('/pending/:id', contr.updatePendingTests);
router.put('/completed/:id', contr.updateCompleteStudent);
router.delete('/', contr.deleteAllStudents);

module.exports = router;
