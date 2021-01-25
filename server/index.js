const express = require('express');
const testrouter = require('./routes/test.routes');
const studentrouter = require('./routes/student.routes');
const quizzrouter = require('./routes/quizz.routes');
const cors = require('cors');
const answersMiddleware = require('./middleware/test.answers');

const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(answersMiddleware);
app.use('/test', testrouter);
app.use('/student', studentrouter);
app.use('/quiz', quizzrouter);

const PORT = 3002;
(async () => {
  try {
    await db.conn;
    app.listen(PORT, () => console.log('http://localhost:3002'));
  } catch (e) {
    console.log(e);
  }
})();
