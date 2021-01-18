import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
        <i className="fas fa-edit"></i>
        <i className="far fa-paper-plane"
            onClick={() => setAssignTest(true)}/>
          <i 
          className={`far fa-trash-alt ${styles.Bin}`}
          onClick={() => props.deleteTestHandler(props.test._id)}/>
        </div>

      </div>
      <div className={styles.ExtraInfo}>

        <p>Sent to:</p>
        <div className={styles.AssignTest}>
          {students ? 
          students.map((st, i) => {
            if (st.pendingtests.some(t => t.id === props.test._id)) { //here
              return (
                <div className={styles.StName} key={i}>
                  <i className="fas fa-user-alt"/>{st.name}
                </div>)
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
