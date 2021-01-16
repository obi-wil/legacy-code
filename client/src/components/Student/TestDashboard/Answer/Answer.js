import React from 'react';
import styles from './Answer.module.scss';

const Answer = props => {
  return (
    <button className={styles.Button}>{props.children}</button>
  );
};

export default Answer;
