// import React, { useSelector } from 'react';
import Question from './Question/Question';
import styles from './TestDashboard.module.scss';

const TestDashboard = props => {

  // const questions = useSelector(state => state.currentTest);

  return (
    <div className={styles.TestDashboard}>
      <div className={styles.Content}>
        <Question /* question={props.question[current]} *//>
      
      </div>
      <div className={styles.Contentbg}/>
    </div>
  );
};

export default TestDashboard;
