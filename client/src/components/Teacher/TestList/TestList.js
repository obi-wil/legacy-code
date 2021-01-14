import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTests, deleteTest } from '../../../store/actions/testActions';
import TestCard from '../TestCard/TestCard';
import styles from './TestList.module.scss';

const TestList = () => {

  const tests = useSelector(state => state.tests);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => dispatch(fetchTests()), [dispatch]);

  useEffect(() => {
    console.log('useEffect with usecallback is running')
    initFetch();
  }, [initFetch]);

  const deleteTestHandler = (id) => dispatch(deleteTest(id));

  return (
    <div className={styles.TestList}>
      {tests.length ? tests.map((test, i) => (
        <TestCard 
          test={test} 
          key={i} 
          deleteTestHandler={deleteTestHandler}/>
      )) : 'Fetching tests!'}
      {/* <Link to="/testcreator"><button>Create test</button></Link> */}
    </div>
  );
};

export default TestList;
