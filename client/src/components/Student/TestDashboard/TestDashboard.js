import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question/Question';
import styles from './TestDashboard.module.scss';

// Only now
import { fetchQuizz } from '../../../store/actions/testActions';



const TestDashboard = props => {

  const [currentQ, setCurrentQ] = useState(0);
  const quizz = useSelector(state => state.currentQuizz);
  
  // Only now
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuizz('6000a17770723cc5f2280620'));
  }, [dispatch]);

  const nextButton = (end) => {
    end ? setCurrentQ(0) : setCurrentQ(current => current + 1)
  };

  const question = quizz.questions ? 
    (<Question 
      question={quizz.questions[currentQ]}
      quizz={quizz}
      currQuest={currentQ}
      nextButton={nextButton}
    />) :
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
