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
    const result = await student.find({name: req.body.name});
    res.status(201);
    res.send(result[0]);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};
// const postStudent = async (req, res) => {
//   try {
//     const result = await student.create(req.body);
//     res.status(201);
//     res.send(result);
//   } catch (e) {
//     res.status(500);
//     res.send(e);
//   }
// };

const postStudents = async (req, res) => {
  try {
    const result = await student.insertMany(req.body);
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

const updatePendingTests = async (req, res) => {
  try {
    const { ssids } = req.body;
    const { test } = req.body;
    await student.updateMany(
      {_id: {$in: ssids}}, 
      {$push: { pendingtests: test}}
    );
    const students = await student.find();
    res.send(students);
    res.status(200);
  } catch (e) {
    console.log(e)
    res.status(500);
    res.send(e.message);
  }
};

const deleteAllStudents = async (req, res) => {
  try {
    await student.deleteMany({});
    res.status(204);
    res.send('ok');
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { postStudent, postStudents, getStudents, getStudent, updateCompleteStudent, updatePendingTests, deleteAllStudents };
