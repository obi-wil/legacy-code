import React, { useState } from 'react';
import StudentProgress from '../StudentProgress/StudentProgress';
import StudentProgressCard from '../StudentProgressCard/StudentProgressCard';

import styles from './StudentCard.module.scss';

const StudentCard = props => {

  const [showingProgress, setShowingProgress] = useState(false);

  const showProgress = () => setShowingProgress(true);
  
  return (
    <React.Fragment>
      <div className={styles.StudentCard}>
        <div className={styles.StudentName}>

          <i className="fas fa-user-alt"/> {props.student.name}
        </div>
        <div className={styles.StudentActions}>
          {props.student.completedtests.length}
          <i className={`fas fa-check ${styles.Tick}`}></i> 
          <i 
            className="fas fa-chart-line"
            onClick={showProgress}
          ></i>
        </div>
      </div>
      <StudentProgressCard 
        show={showingProgress} 
        close={() => setShowingProgress(false)}
      >
        <StudentProgress student={props.student}/>
      </StudentProgressCard>
    </React.Fragment>
  );
};

export default StudentCard;
