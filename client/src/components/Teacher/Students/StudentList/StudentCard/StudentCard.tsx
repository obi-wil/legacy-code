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
          <div className={styles.StudentActionsItem}>
            {props.student.completedtests.length}
            <i className={`fas fa-check ${styles.Tick}`}></i> 
          </div>
          <div className={styles.StudentActionsItem}>
            {props.student.pendingtests.length}
            <i className={`fas fa-circle ${styles.Circle}`}></i> 
          </div>
          <div className={styles.StudentActionsItem}>
            <i 
              className={`fas fa-chart-line ${styles.Chart}`}
              onClick={showProgress}
            ></i>
          </div>
          
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
