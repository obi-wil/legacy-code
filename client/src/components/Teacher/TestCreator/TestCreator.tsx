import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateButton from '../../UI/CreateButton/CreateButton';
import QuestionCard from './QuestionCard/QuestionCard';
import QuestionCreator from './QuestionCreator/QuestionCreator';
import { postTest } from '../../../store/actions/testActions';

import styles from './TestCreator.module.scss';

const TestCreator = props => {

  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState('Test 1');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Retrieve questions from storage
    const item = JSON.parse(localStorage.getItem('currenttest'));
    if (!item) localStorage.setItem('currenttest', JSON.stringify({}))
    else {
      const storedQuestions = [];
      for (let key of Object.keys(item)) {
        storedQuestions.push(item[key]);
      }
      if (storedQuestions.length) setQuestions(storedQuestions);
    }
  }, []);

  const saveQuestionHandler = q => {
    // Create question object
    const letters = ['a', 'b', 'c', 'd'];
    const options = letters.map((ch) => ({op: q[ch].value, correct: false}));
    const newQuestion = {
      question: q.question.value,
      options,
      answer: q[q.answer.value].value
    };
    newQuestion.options.map(opt => opt.correct = (opt.op === newQuestion.answer));

    if (q.selectedImage.files[0]) {
      // SHOW SPINNER
      const data = new FormData();
      data.append('file', q.selectedImage.files[0])
      data.append('upload_preset', 'learntoday')
      
      fetch('https://api.cloudinary.com/v1_1/garmobal/image/upload', {
        method: 'POST',
        body: data})
        .then(res => res.json())
        .then(res => {
          newQuestion.image = res.secure_url;
          setQuestions(currentQ => [...currentQ, newQuestion]);
          const currenttest = JSON.parse(localStorage.getItem('currenttest'));
          currenttest[newQuestion.question] = newQuestion
          localStorage.setItem('currenttest', JSON.stringify(currenttest));
          //HIDE SPINNER
        });
    } else {
      setQuestions(currentQ => [...currentQ, newQuestion]);
      const currenttest = JSON.parse(localStorage.getItem('currenttest'));
      currenttest[newQuestion.question] = newQuestion
      localStorage.setItem('currenttest', JSON.stringify(currenttest));
    }

  };

  const trashHandler = question => {
    const currenttest = JSON.parse(localStorage.getItem('currenttest'));
    delete currenttest[question];
    localStorage.setItem('currenttest', JSON.stringify(currenttest));
    setQuestions(questions.filter(q => q.question !== question));
  };

  const titleHandler = (e) => setTitle(e.target.value)

  const dispatch = useDispatch();

  const submitTestHandler = () => {
    if (questions.length < 4) setIsValid(false);
    else {
      dispatch(postTest(questions, title));
      localStorage.clear();
      props.history.replace('/tests');
    }
  };

  const addMoreQuestionsMessage = (<p className={isValid ? styles.Hidden : styles.Warning}>Tests must have at least 4 questions and a title</p>)

  return (
    <div className={styles.TestCreator}>
      <div className={styles.QuestionsList}>      
        {questions.length ? 
          questions.map((q, i) => (
          <QuestionCard key={i} quest={q} trashHandler={trashHandler}/>
          )) : 
          (<p className={styles.Message}>Start by adding some questions!</p>)
          }
      </div>
      <QuestionCreator saveQuestion={saveQuestionHandler}/>
      <hr className={styles.LineBreak}/>
      <div className={styles.SaveTest}>
          <input 
            type='text' 
            placeholder='Add a test title'
            onChange={titleHandler}
            className={styles.Title}/>
        <div className={styles.TestButtonDiv}>
          <CreateButton clicked={submitTestHandler}>Save Test</CreateButton>
        </div>
        {questions.length < 4 ? addMoreQuestionsMessage : null}
      </div>
    </div>
  );
};

export default TestCreator;
