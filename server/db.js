const mongoose = require('mongoose');

const db = {};
const url = 'mongodb://localhost:27017/learntoday'
mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true });
db.conn = mongoose;

module.exports = db;
