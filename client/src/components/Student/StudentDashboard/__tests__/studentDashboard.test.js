import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { reduxRender, screen, cleanup } from '../../../../utils/test-utils';
import { deserialize, serialize } from 'v8';
import StudentTestList from '../StudentTestList/StudentTestList';
import CompletedTest from '../CompletedTest/CompletedTest';
import PendingTest from '../PendingTest/PendingTest';
import StudentDashboard from '../StudentDashboard';

afterEach(cleanup);

// jest.mock('../StudentTestList/StudentTestList', () => (student, listType) => (
//   <div data-testid="studentTestList"></div>
// ));

// TODO: should render all pending tests once
// TODO: should render all completed tests once
// TODO: should render 'you have no tests' if a list is empty

describe('Student dashboard', () => {
  it('should render a list of pending tests and completed tests', () => {
    const state = { role: 'student', currentStudent: { name: 'Jane' } };

    reduxRender(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>,
      { initialState: deserialize(serialize(state)) },
    );
    const pendingList = screen.getByText(/new challenges/i);
    const completedList = screen.getByText(/completed/i);
    expect(pendingList).toBeInTheDocument();
    expect(completedList).toBeInTheDocument();
  });

  it('should render all pending tests once', () => {
    reduxRender(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>,
    );
    const teacherGreeting = screen.getByText(/hello, mr. /i);
    expect(teacherGreeting).toBeInTheDocument();
  });

  it('should render all completed tests once', () => {
    const state = { role: 'student', currentStudent: { name: 'Jane' } };

    reduxRender(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>,
      { initialState: deserialize(serialize(state)) },
    );
    const pendingTests = screen.queryByText('pendingtests');
    expect(pendingTests).toBeInTheDocument();
  });

  it('should render "you have no tests" if a list is empty', () => {
    const state = { role: 'student', currentStudent: { name: 'Jane' } };

    reduxRender(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>,
      { initialState: deserialize(serialize(state)) },
    );
    const pendingTests = screen.queryByText('pendingtests');
    expect(pendingTests).toBeInTheDocument();
  });
});
