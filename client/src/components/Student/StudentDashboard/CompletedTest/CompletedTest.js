import React from 'react';
import styles from './CompletedTest.module.scss';

const CompletedTest = props => {

  return (
    <div className={styles.CompletedTest}>
      <div className={styles.TestTitle}>
        <p>{props.test.title}</p>
      </div>
    </div>
  );
};

export default CompletedTest;
