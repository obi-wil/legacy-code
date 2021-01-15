import React from 'react';
import PendingTest from '../PendingTest/PendingTest';
import styles from './PendingTests.module.scss';

const PendingTests = props => {

  return (
    <div className={styles.PendingTests}>
      {props.student.pendingtests ? 
      props.student.pendingtests.map((t) => (
        <PendingTest key={t.id} test={t}/>
      )) : 
      <p>You have no pending tests!</p>
      }
    </div>
  );
};

export default PendingTests;
