import styles from './StudentDashboard.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStudent } from '../../../store/actions/studentListActions';

import React, { useEffect } from 'react';
import StudentTestList from './StudentTestList/StudentTestList';
import TestDashboard from '../TestDashboard/TestDashboard';

const StudentDashboard = () => {
  const student = useSelector(state => state.currentStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);
  
  return (
    <React.Fragment>
      <div className={styles.StudentDashboard}>
        <div>
          <StudentTestList student={student} listType={'pendingtests'}/>
        </div>
        <div>
          <StudentTestList student={student} listType={'completetedtests'}/>
        </div>
      </div>
      <TestDashboard />
    </React.Fragment>
    );
};

export default StudentDashboard;
