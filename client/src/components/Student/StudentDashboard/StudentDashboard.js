import styles from './StudentDashboard.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStudent } from '../../../store/actions/studentListActions';

import React, { useEffect } from 'react';
import PendingTests from './PendingTests/PendingTests';

const StudentDashboard = () => {
  const student = useSelector(state => state.currentStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent());
    console.log(student)
  }, [dispatch]);
  
  return (
    <div className={styles.StudentDashboard}>
      <div className={styles.PendingTestsContainer}>
        <PendingTests student={student}/>
      </div>
    </div>
    );
};

export default StudentDashboard;
