import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/App.scss';
import Layout from './components/Layout/Layout';
import TestList from './components/Teacher/TestList/TestList';
import TestCreator from './components/Teacher/TestCreator/TestCreator';
import StudentList from './components/Teacher/Students/StudentList/StudentList';
import StudentDashboard from './components/Student/StudentDashboard/StudentDashboard';
import TestDashboard from './components/Student/TestDashboard/TestDashboard';
import LoginPage from './components/Authentication/LoginPage/LoginPage';

const App = props => {

  const role = useSelector(state => state.role);

  let routes;
  if (role === 'teacher') {
    routes = (
      <Layout role={role}>
        <Switch>  
          <Route path="/tests" exact component={TestList} /> 
          <Route path="/testcreator" exact component={TestCreator} /> 
          <Route path="/students" exact component={StudentList} />
          <Redirect to="/tests" />
        </Switch>
      </Layout>
    );
  } else if (role === 'student') {
    routes = (
      <Layout role={role}>
        <Switch>  
          <Route path="/user" exact component={StudentDashboard} /> 
          <Route path="/user/quizz" exact component={TestDashboard} /> 
          <Redirect to="/user" />
        </Switch>
      </Layout>
    );
  } else {
    routes = (
        <Switch> 
          <Route path="/login" exact component={LoginPage} /> 
          <Redirect to="/login" />
        </Switch>
    )
  }

  // const teacherRoutes = (
  //   <Switch>  
  //     <Route path="/tests" exact component={TestList} /> 
  //     <Route path="/testcreator" exact component={TestCreator} /> 
  //     <Route path="/students" exact component={StudentList} />
  //     <Redirect to="/tests" />
  //   </Switch>
  // );

  // const studentRoutes = (
  //   <Switch>  
  //     <Route path="/user" exact component={StudentDashboard} /> 
  //     <Route path="/user/quizz" exact component={TestDashboard} /> 
  //     <Redirect to="/user" />
  //   </Switch>
  // );

  return (
    <div className="App">
      {routes}

      {/* <Layout role={role}>
      </Layout> */}
    </div>
  );
}

export default withRouter(App);
