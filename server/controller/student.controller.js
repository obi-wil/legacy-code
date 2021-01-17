const student = require('../models/student.model');

const getStudents = async (req, res) => {
  try {
    const result = await student.find();
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const postStudent = async (req, res) => {
  try {
    const result = await student.create(req.body);
    res.status(201);
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await student.findOne({_id: id});
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const updateCompleteStudent = async (req, res) => {
  console.log('st controller', req.body);
  try {
    const st = await student.findOne({_id: req.params.id});

    st.completedtests.push(req.body);
    const filteredPending = st.pendingtests.filter(t => t.id !== req.body.id); 
    st.pendingtests = filteredPending;
    
    await st.save();
    res.send(st);
    res.status(200);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

// const deleteStudent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await student.deleteOne({_id: id});
//     res.status(204);
//     res.send('ok');
//   } catch (e) {
//     res.status(500);
//     res.send(e);
//   }
// };

module.exports = { postStudent, getStudents, getStudent, updateCompleteStudent };
