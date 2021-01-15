import React from 'react';
import styles from './PendingTest.module.scss';

const PendingTest = props => {

  return (
    <div className={styles.PendingTest}>
      <div className={styles.TestTitle}>
        <p>{props.test.title}</p>
      </div>
      <button className={styles.Go}>
        GO!
      </button>
    </div>
  );
};

export default PendingTest;
