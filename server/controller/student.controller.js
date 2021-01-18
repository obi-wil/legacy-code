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
    const ids = req.body.map((ss) => ss._id);
    const pendingTests = req.body.map((ss) => ss.pendingtests);
    for (let i = 0; i < ids.length; i++) {
      const st = await student.findOne({_id: ids[i]});
      st.pendingtests = pendingTests[i]; 
      await st.save();
    }
    
    // WHY are you not working **SAAAD**
    // const students = await student.find({_id: {$in: ids}});
    // for (let i in students.length) {
      //   students[i].pendingtests.push(pendingTests[i]);
      //   await student[i].save(); // HOW DO I SAVE THIS?
      // }
      
      
      
    const students = await student.find({});
    res.send(students);
    res.status(200);
  } catch (e) {
    res.status(500);
    res.send(e.message);
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

module.exports = { postStudent, getStudents, getStudent, updateCompleteStudent, updatePendingTests };
