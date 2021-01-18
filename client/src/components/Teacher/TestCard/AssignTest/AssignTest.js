import React, { useState} from 'react';
import { useDispatch } from 'react-redux';

import SelectStudent from './SelectStudent/SelectStudent';
import { updateStudentsPendingTests } from '../../../../store/actions/studentListActions';
import styles from './AssignTest.module.scss';

const AssignTest = props => {

  const [selectedSS, setSelectedSS] = useState([]);
  const dispatch = useDispatch();

  const selectNameHandler = st => {
    const filter = selectedSS.filter(s => s._id !== st._id);
    if (filter.length === selectedSS.length) {
      setSelectedSS([...selectedSS, st]);
    } else {
      setSelectedSS(filter);
    }
  };

  const assignTestsHandler = (selection) => {

    const updatedSS = selection.map(ss => {
      ss.pendingtests.push(props.test._id)
      return ss;
    });

    dispatch(updateStudentsPendingTests(props.test._id, 'pending', updatedSS));
    setTimeout(() => {
      setSelectedSS([]);
      props.close();
    }, 1000);
  }

  return (
    <div className={styles.AssignTest}>
      <div className={styles.Students}>
        {props.students.map((st, i) => {
          if (!st.pendingtests.includes(props.test._id)) {
            return (
              <SelectStudent
                student={st}
                key={i}
                selectNameHandler={selectNameHandler}
              >{st.name}</SelectStudent>
            )
          } else return null
        })}
      </div>
      {/* <div className={styles.Assign}>
        {selectedSS.length ? selectedSS.map(st => st.name).join(', ') : null}
      </div> */}
      <div className={styles.Assign} onClick={() => assignTestsHandler(selectedSS)}>
        Send test <i className="far fa-paper-plane"></i> 
      </div>
    </div>
  );
};

export default AssignTest;
