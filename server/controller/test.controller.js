const test = require('../models/test.model');

const getTests = async (req, res) => {
  try {
    const result = await test.find();
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const postTest = async (req, res) => {
  try {
    const result = await test.create(req.body);
    res.status(201);
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

// Not using yet

const getTest = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await test.findOne({_id: id});
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    await test.deleteOne({_id: id});
    res.status(204);
    res.send('ok');
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

// Not using yet
const editTest = async (req, res) => {
  try {
    const { id } = req.params;
    await test.updateOne({_id: id}, req.body);
    const result = await test.findOne({_id: id});
    res.send(result);
    res.status(200);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { getTests, postTest, getTest, deleteTest, editTest };
