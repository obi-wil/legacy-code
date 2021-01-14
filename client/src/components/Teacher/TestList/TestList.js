import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTests } from '../../../store/actions/testActions';
import TestCard from '../TestCard/TestCard';
import styles from './TestList.module.scss';


const TestList = () => {

  const tests = useSelector(state => state.tests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  return (
    <div className={styles.TestList}>
      {tests.map((test, i) => (
        <TestCard test={test} key={i}/>
      ))}
      {/* <Link to="/testcreator"><button>Create test</button></Link> */}
    </div>
  );
};

export default TestList;
