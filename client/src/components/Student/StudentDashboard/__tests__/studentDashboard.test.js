import React from 'react';
// import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxRender, screen, cleanup } from '../../../../utils/test-utils';
import { deserialize, serialize } from 'v8';
// import StudentTestList from '../StudentTestList/StudentTestList';
// import CompletedTest from '../CompletedTest/CompletedTest';
// import PendingTest from '../PendingTest/PendingTest';
import StudentDashboard from '../StudentDashboard';

afterEach(cleanup);

// TODO: should render all pending tests once
// TODO: should render all completed tests once
// TODO: should render 'you have no tests' if a list is empty

const state = {
  role: 'student',
  currentStudent: { name: 'Jane' },
  tests: [{ id: '1', title: 'test pending' }],
  currentQuizz: { id: '1', title: 'test pending' },
};

describe('Student dashboard', () => {
  it('should render a list of pending tests and completed tests', () => {
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
});
