import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../../../../store/actions/studentListActions';
import CreateButton from '../../../UI/CreateButton/CreateButton';
import ImportStudent from './ImportStudent/ImportStudent';
import ImportStudentsCard from './ImportStudentsCard/ImportStudentsCard';
import StudentCard from './StudentCard/StudentCard';

import styles from './StudentList.module.scss';

const StudentList = props => {

  const [importingSS, setImportingSS] = useState(false);

  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!students.length) dispatch(fetchStudents());
  }, [dispatch]); // students not a dependency

  return (
    <div className={styles.StudentList}>
      <ImportStudentsCard
        show={importingSS}
        close={() => setImportingSS(false)}
      >
        <ImportStudent close={() => setImportingSS(false)}/>
      </ImportStudentsCard>
      <div className={styles.ButtonDiv}>
        <CreateButton clicked={() => setImportingSS(true)}><i className="fas fa-file-import"></i> Import students</CreateButton>
      </div>
      {students.length
        ? students.map((ss, i) => (
            <StudentCard 
              student={ss}
              key={i}
            />
          ))
        : 'You have no students yet'}
    </div>
  );
};

export default StudentList;
