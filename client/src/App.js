import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/App.scss';
import Layout from './components/Layout/Layout';
import TestList from './components/Teacher/TestList/TestList';
import TestCreator from './components/Teacher/TestCreator/TestCreator';
import StudentList from './components/Teacher/Students/StudentList/StudentList';


const App = props => {

  const role = useSelector(state => state.role);

  const teacherRoutes = (
    <Switch>  
      <Route path="/tests" exact component={TestList} /> 
      <Route path="/testcreator" exact component={TestCreator} /> 
      <Route path="/students" exact component={StudentList} />
      <Redirect to="/tests" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>
        {role === 'teacher' ? teacherRoutes : 'hello student'}
      </Layout>
    </div>
  );
}

export default App;
