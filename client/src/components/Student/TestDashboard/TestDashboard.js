import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Feedback from './Feedback/Feedback';
import Question from './Question/Question';
import styles from './TestDashboard.module.scss';

const TestDashboard = props => {

  const [currentQ, setCurrentQ] = useState(0);
  const quizz = useSelector(state => state.currentQuizz);
  const [showingFeedback, setShowingFeedback] = useState(false); // HERE
  const [quizzResults, setQuizzResults] = useState({});
  
  const nextButton = (completed) => {
    if (!completed) {
      setCurrentQ(current => current + 1);
    } else {
      setCurrentQ(0);
      setQuizzResults(completed)
      setShowingFeedback(true);
    }
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
        {console.log('test dashboard currentq', currentQ)}
        {showingFeedback ? <Feedback quizzResults={quizzResults}/> : question}
      </div>
      <div className={styles.Contentbg}/>
    </div>
  );
};

export default TestDashboard;


// Only now
// import { fetchQuizz } from '../../../store/actions/testActions';

  // Only now
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQuizz('6000a17770723cc5f2280620'));
  // }, [dispatch]);
