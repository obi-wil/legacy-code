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

  useEffect(() => {
    // Retrieve questions from storage
    const storedQuestions = [];
    for (let key of Object.keys(localStorage)) {
      storedQuestions.push(JSON.parse(localStorage.getItem(key)));
    }
    if (storedQuestions.length) setQuestions(storedQuestions);
    
  }, []);

  const saveQuestionHandler = (q) => {
    // Create question object
    const letters = ['a', 'b', 'c', 'd'];
    const options = letters.map((ch) => ({op: q[ch].value, correct: false}));
    const newQuestion = {
      question: q.question.value,
      options,
      answer: q[q.answer.value].value
    };
    newQuestion.options.map(opt => opt.correct = (opt.op === newQuestion.answer));
    // Update localstorage and state
    setQuestions(currentQ => [...currentQ, newQuestion]);
    localStorage.setItem(newQuestion.question, JSON.stringify(newQuestion));
  };

  const trashHandler = question => {
    localStorage.removeItem(question);
    setQuestions(questions.filter(q => q.question !== question));
  };

  const titleHandler = (e) => setTitle(e.target.value)

  const dispatch = useDispatch();

  const submitTestHandler = () => {
    dispatch(postTest(questions, title));
    localStorage.clear();
    props.history.replace('/tests');
  };

  const addMoreQuestionsMessage = (<p>Tests must have at least 4 questions</p>)

  // title + submit inside a form???
  return (
    <div className={styles.TestCreator}>
      <div className={styles.QuestionsList}>      
        {questions.map((q, i) => (
          <QuestionCard key={i} quest={q} trashHandler={trashHandler}/>
          ))}
      </div>
      <QuestionCreator saveQuestion={saveQuestionHandler}/>
      <div>
        <input 
          type='text' 
          placeholder='Add a test title'
          onChange={titleHandler}
          className={styles.Title}/>
      </div>
      <div>
        <CreateButton clicked={submitTestHandler}>Save Test</CreateButton>
      </div>
      {questions.length < 4 ? addMoreQuestionsMessage : null} {/* try thisssssssssssss */}
    </div>
  );
};

export default TestCreator;
