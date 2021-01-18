import React from 'react';

import PendingTest from '../PendingTest/PendingTest';
import CompletedTest from '../CompletedTest/CompletedTest';
import styles from './StudentTestList.module.scss';

const StudentTestList = props => {

  let listTitle;

  let listContent;

  if (props.listType === 'pendingtests') {
    listTitle = 'New Challenges!';
    listContent = props.student.pendingtests ? (
      props.student.pendingtests.map((t) => (
        <PendingTest key={t.id} test={t}/>
      ))
    ) : (<p>You have no tests!</p>);
  } else {
    listTitle = 'Completed';
    listContent = props.student.pendingtests ? (
      props.student.completedtests.map((t) => (
        <CompletedTest key={t.id} test={t}/>
      ))
    ) : (<p>You have no tests!</p>);
  }

  return (
    <div>
      <div className={styles.ListType}>
        {console.log(props.student)}
        {listTitle}
      </div>
      <div className={styles.StudentTestList}>
        {listContent}
      </div>
    </div>
  );
};

export default StudentTestList;
