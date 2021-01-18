import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AssignTest from './AssignTest/AssignTest';
import AssignTestCard from './AssignTestCard/AssignTestCard';
import styles from './TestCard.module.scss';

const TestCard = props => {

  const [assignTest, setAssignTest] = useState(false);

  const students = useSelector(state => state.students);

  return (
    <React.Fragment>
      <div className={styles.TestCard}>
        <div className={styles.TestInfo}>
          {props.test.title}
        </div>
        <div className={styles.TestActions}>
          <i className="fas fa-book-reader"
            onClick={() => setAssignTest(true)}/>
          <i 
          className={`far fa-trash-alt ${styles.Bin}`}
          onClick={() => props.deleteTestHandler(props.test._id)}/>
        </div>

      </div>
      <div className={styles.ExtraInfo}>
        <div className={styles.AssignTest}>

          Sent to: {students ? 
          students.map((st, i) => {
            if (st.pendingtests.includes(props.test._id)) {
              return (<div key={i}>{st.name}</div>)
            } else return null
          })
          : null}
        </div>
      </div>
      <AssignTestCard
        show={assignTest}
        close={() => setAssignTest(false)}
      >
        <AssignTest 
          students={students} 
          test={props.test} 
          close={() => setAssignTest(false)}/>
      </AssignTestCard>
    </React.Fragment>
  );
};

export default TestCard;
