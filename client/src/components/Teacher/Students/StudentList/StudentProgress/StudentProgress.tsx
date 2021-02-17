import React from 'react';

import styles from './StudentProgress.module.scss';

const StudentProgress = props => {
  return (
    <div className={styles.StudentProgress}>
      <div className={styles.Header}>
        Completed tests: 
        <span className={styles.Completed}>
          {props.student.completedtests.length}
        </span>
      </div>
      <div className={styles.CompletedInfo}>
        {props.student.completedtests.length ? 
          <div className={styles.TestContainer}>
            {props.student.completedtests.map((test, i) => (
              <div key={i} className={styles.Test}>
                <div className={styles.TestTitle}>
                  <div>{test.title}</div>
                  <span>{test.result.percentage}%</span>
                </div>
                <div className={styles.TestQuestions}>
                  {test.result.questions.map((q, i) => (
                    <p key={i}>{q.question} <span style={{color: q.correct ? 'green' : '#E63046'}}>{q.option}</span></p>
                ))}
                </div>
              </div>
            ))}
          </div>
         : null}
      </div>

      <div className={styles.Header}>
        Pending tests: 
        <span className={styles.Pending}>
          {props.student.pendingtests.length}
        </span>
      </div>
      <div className={styles.PendingContainer}>
        {props.student.pendingtests.length ? 
          props.student.pendingtests.map((test, i) => (
            <p key={i}>{test.title}</p>
          ))

         : null}
      </div>


    </div>
  );
};

export default StudentProgress;
