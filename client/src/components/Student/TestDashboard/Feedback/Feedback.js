import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Feedback.module.scss';
import * as actionTypes from '../../../../store/actions/actionTypes';
import * as confetti from 'canvas-confetti';

const Feedback = props => {

  const student = useSelector(state => state.currentStudent);

  let sentence = props.quizzResults.result.percentage > 60 ? 
    `Well done, ${student.name}!` :
    `Good luck next time, ${student.name}`;

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      confetti.create(undefined, { resize: true, useWorker: false })({
        startVelocity: 80,
        particleCount: 200,
        gravity: 2,
        ticks: 400,
        zIndex: 200,
        origin: {
          x: 0.5,
          y: 0.7,
        },
      });
    }, 300);
    setTimeout(() => {
      confetti.create(undefined, { resize: true, useWorker: false })({
        startVelocity: 80,
        particleCount: 300,
        gravity: 2,
        ticks: 400,
        zIndex: 200,
        origin: {
          x: 0.4,
          y: 0.8,
        },
      });
    }, 400);
    setTimeout(() => {
      confetti.create(undefined, { resize: true, useWorker: false })({
        startVelocity: 80,
        particleCount: 200,
        gravity: 2,
        ticks: 400,
        zIndex: 200,
        origin: {
          x: 0.6,
          y: 0.7,
        },
      });
    }, 500);
    
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
