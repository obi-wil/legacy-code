import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Feedback.module.scss';
import * as actionTypes from '../../../../store/actions/actionTypes';

const Feedback = props => {

  const student = useSelector(state => state.currentStudent);

  let sentence = props.quizzResults.result.percentage > 70 ? 
    `Well done, ${student.name}!` :
    `Good luck next time, ${student.name}`;

  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch({type: actionTypes.RESET_PROGRESS})
  }, [dispatch])
  
  const closeHandler = () => {
    props.history.replace('/user')
  }

  return (
    <div className={styles.Feedback}>
      <div className={styles.Close} onClick={closeHandler}><i className="far fa-times-circle"></i></div>
      <div className={styles.Message}>
        {sentence}
      </div>
      <div className={styles.Progress}>
        <div className={styles.Circle}>
          <div className={styles.SliceRight}/>
          <div className={styles.SliceLeft}/>
          <div className={styles.Percentage}>
            <div className={styles.Number}>
              {props.quizzResults.result.percentage}%
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default withRouter(Feedback);
