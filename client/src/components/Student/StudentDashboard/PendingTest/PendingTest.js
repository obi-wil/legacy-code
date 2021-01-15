import React from 'react';
import styles from './PendingTest.module.scss';

const PendingTest = props => {

  return (
    <div className={styles.PendingTest}>
      <p>{props.test.title}</p>
      <button className={styles.Go}>
        GO!
      </button>
    </div>
  );
};

export default PendingTest;
