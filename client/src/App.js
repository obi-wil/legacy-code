import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles/App.scss';
import { fetchTests } from './store/actions/testActions';

const App = props => {

  const tests = useSelector(state => state.tests);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTests());
  }, []);


  return (
    <div className="App">
      {console.log(tests)}
      hello
    </div>
  );
}

export default App;
