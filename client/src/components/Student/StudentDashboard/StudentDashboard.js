import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './StudentDashboard.module.scss';
import { fetchStudent } from '../../../store/actions/studentListActions';

import StudentTestList from './StudentTestList/StudentTestList';

const StudentDashboard = () => {
  const student = useSelector(state => state.currentStudent);
  const progress = useSelector(state => state.progress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  // This will update currentQuizz state
  
  
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
      {console.log(progress, 'preo')}
    </React.Fragment>
    );
};

export default StudentDashboard;
