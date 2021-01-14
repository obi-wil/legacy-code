import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.scss';
import Layout from './components/Layout/Layout';
import TestList from './components/Teacher/TestList/TestList';
import TestCreator from './components/Teacher/TestCreator/TestCreator';


const App = props => {

  return (
    <div className="App">
      <Layout>
        <Switch>  
          <Route path="/tests" exact component={TestList} /> 
          <Route path="/testcreator" exact component={TestCreator} /> 
          <Redirect to="/tests" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
