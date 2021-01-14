import React, { useState, useEffect } from 'react';
import CreateButton from '../../UI/CreateButton/CreateButton';
import QuestionCard from './QuestionCard/QuestionCard';
import QuestionCreator from './QuestionCreator/QuestionCreator';

import styles from './TestCreator.module.scss';

const TestCreator = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Retrieve questions from storage
    const storedQuestions = [];
    for (let key of Object.keys(localStorage)) {
      storedQuestions.push(JSON.parse(localStorage.getItem(key)));
    }
    if (storedQuestions.length) setQuestions(storedQuestions);
  }, []);

  const createQuestionHandler = () => {
    console.log('hello')
  };

  const saveQuestionHandler = (q) => {
    // Create question object
    const letters = ['a', 'b', 'c', 'd'];
    const options = letters.map((ch) => ({op: q[ch].value, correct: false}));
    const newQuestion = {
      title: q.question.value,
      options,
      answer: q[q.answer.value].value
    };
    newQuestion.options.map(opt => opt.correct = (opt.op === newQuestion.answer));
    // Update localstorage and state
    setQuestions(currentQ => [...currentQ, newQuestion]);
    localStorage.setItem(newQuestion.title, JSON.stringify(newQuestion));
  };

  const trashHandler = title => {
    localStorage.removeItem(title);
    setQuestions(questions.filter(q => q.title !== title));
  };

  return (
    <div className={styles.TestCreator}>
      
      <input type='text' placeholder='Test title' className={styles.Title}/>
      <div className={styles.QuestionsList}>      
        {questions.map((q, i) => (
          <QuestionCard key={i} quest={q} trashHandler={trashHandler}/>
          ))}
      </div>
      <QuestionCreator saveQuestion={saveQuestionHandler}/>
      <CreateButton clicked={createQuestionHandler}><i className="fas fa-plus-square"></i> Add question</CreateButton>
      <CreateButton> Save Test</CreateButton>

      
    </div>
  );
};

export default TestCreator;
