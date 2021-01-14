import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../../../../store/actions/studentListActions';


import styles from './StudentList.module.scss';

const StudentList = () => {

  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className={styles.StudentList}>
      {students.length ? students.map((ss, i) => (
          <p 
            test={ss} 
            key={i} 
            >{ss.name}, completed tests: {ss.completedtests.length}</p>
            )) : 'Fetching students!'}
    </div>
  );
};

export default StudentList;
