import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question/Question';
import styles from './TestDashboard.module.scss';


const TestDashboard = props => {

  const [currentQ, setCurrentQ] = useState(0);
  const quizz = useSelector(state => state.currentQuizz);

  const question = quizz.questions ? 
    (<Question question={quizz.questions[currentQ]}/>) :
    'Loading';

  return (
    <div className={styles.TestDashboard}>
      <div className={styles.Content}>
        {question}
      </div>
      <div className={styles.Contentbg}/>
    </div>
  );
};

export default TestDashboard;
