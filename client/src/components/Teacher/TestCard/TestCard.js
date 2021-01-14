import React from 'react';

import styles from './TestCard.module.scss';

const TestCard = props => {
  return (
    <div className={styles.TestCard}>
      <div>
        {props.test.title}
      </div>
    </div>
  );
};

export default TestCard;
