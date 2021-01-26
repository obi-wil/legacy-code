import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './StudentDashboard.module.scss';
import { fetchStudent } from '../../../store/actions/studentListActions';

import StudentTestList from './StudentTestList/StudentTestList';
import { State, Student } from '../../../Interfaces';

const StudentDashboard = () => {
  const student: Student = useSelector((state: State) => state.currentStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent('Sara Gómez'));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className={styles.StudentDashboard}>
        <div>
          <StudentTestList student={student} listType={'pendingtests'} />
        </div>
        <div>
          <StudentTestList student={student} listType={'completetedtests'} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StudentDashboard;
