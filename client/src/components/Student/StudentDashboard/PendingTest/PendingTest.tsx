import React from 'react';
import styles from './PendingTest.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuizz } from '../../../../store/actions/testActions';
import { PendingTest } from '../../../../Interfaces';

interface Prop {
  test: PendingTest;
}

const PendingTest = (props: Prop) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.PendingTest}>
      <div className={styles.TestTitle}>
        <p>{props.test.title}</p>
      </div>
      <Link to={'/user/quiz'}>
        <button
          className={styles.Go}
          onClick={() => dispatch(fetchQuizz(props.test.id))}
        >
          GO!
        </button>
      </Link>
    </div>
  );
};

export default PendingTest;
