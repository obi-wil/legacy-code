import React from 'react';

import styles from './TestCard.module.scss';

const TestCard = props => {



  return (
    <div className={styles.TestCard}>
      <div className={styles.TestInfo}>
        {props.test.title}
      </div>
      <div className={styles.TestActions}>
        <i 
        className={`far fa-trash-alt ${styles.Bin}`}
        onClick={() => props.deleteTestHandler(props.test._id)}/>
      </div>

    </div>
  );
};

export default TestCard;
