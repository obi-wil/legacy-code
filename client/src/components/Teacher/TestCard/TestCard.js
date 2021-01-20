import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AssignTest from './AssignTest/AssignTest';
import AssignTestCard from './AssignTestCard/AssignTestCard';
import styles from './TestCard.module.scss';

const TestCard = props => {

  const [assignTest, setAssignTest] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(true);

  const students = useSelector(state => state.students);

  return (
    <React.Fragment>
      <div className={styles.TestCard}>
        <div className={styles.TestInfo}>
          {props.test.title}
        </div>
        <div className={styles.TestActions}>
        {toggleInfo ? <i className="fas fa-minus" onClick={() => setToggleInfo(!toggleInfo)}></i> : <i className="fas fa-eye" onClick={() => setToggleInfo(!toggleInfo)}></i>}
        <i className="fas fa-edit"></i>
        <i className="far fa-paper-plane"
            onClick={() => setAssignTest(true)}/>
          <i 
          className={`far fa-trash-alt ${styles.Bin}`}
          onClick={() => props.deleteTestHandler(props.test._id)}/>
        </div>

      </div>
      <div 
        className={styles.ExtraInfo}
        style={{
          display: toggleInfo ? 'block' : 'none',
          }}>

        <p style={{color: '#a92232'}}>Pending:</p>
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

        <p style={{color: '#257d4f'}}>Completed:</p>
        <div className={styles.AssignTest}>
          {students ? 
          students.map((st, i) => {
            if (st.completedtests.some(t => t.id === props.test._id)) { //here
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
