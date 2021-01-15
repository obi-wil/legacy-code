import styles from './StudentDashboard.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStudent } from '../../../store/actions/studentListActions';

import React, { useEffect } from 'react';
import StudentTestList from './StudentTestList/StudentTestList';

const StudentDashboard = () => {
  const student = useSelector(state => state.currentStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);
  
  return (
    <div className={styles.StudentDashboard}>
      <div>
        <StudentTestList student={student} listType={'pendingtests'}/>
      </div>
      <div>
        <StudentTestList student={student} listType={'completetedtests'}/>
      </div>
    </div>
    );
};

export default StudentDashboard;
