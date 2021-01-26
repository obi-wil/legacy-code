import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './StudentDashboard.module.scss';
import { fetchStudent } from '../../../store/actions/studentListActions';

import StudentTestList from './StudentTestList/StudentTestList';

const StudentDashboard = () => {
  const student = useSelector(state => state.currentStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent('Sara Gómez'));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className={styles.StudentDashboard}>
        <div>
          <StudentTestList 
            student={student} 
            listType={'pendingtests'}
          />
        </div>
        <div>
          <StudentTestList student={student} listType={'completetedtests'}/>
        </div>
      </div>
    </React.Fragment>
    );
};

export default StudentDashboard;
