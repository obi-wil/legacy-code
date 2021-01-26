import React from 'react';
import styles from './CompletedTest.module.scss';
import { CompletedTest } from '../../../../Interfaces';

interface Prop {
  test: CompletedTest;
}

const CompletedTest = (props: Prop) => {
  return (
    <div className={styles.CompletedTest}>
      <div className={styles.TestTitle}>
        <p>{props.test.title}</p>
        <i className="fas fa-check"></i>
      </div>
    </div>
  );
};

export default CompletedTest;
