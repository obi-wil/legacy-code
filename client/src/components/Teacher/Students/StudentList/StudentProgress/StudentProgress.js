import React from 'react';

import styles from './StudentProgress.module.scss';

const StudentProgress = props => {
  return (
    <div className={styles.StudentProgress}>
      {props.student.name}
    </div>
  );
};

export default StudentProgress;
