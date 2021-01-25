import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { reduxRender, screen, cleanup } from '../../../utils/test-utils';
import { deserialize, serialize } from 'v8';
import NavBar from '../NavBar/NavBar';
import NavItems from '../NavItems/NavItems';

afterEach(cleanup);

describe('Teacher role', () => {
  it('should render teacher links', () => {
    reduxRender(
      <BrowserRouter>
        <NavItems />
      </BrowserRouter>,
    );
    const tests = screen.getByText(/my tests/i);
    const testCreator = screen.getByText(/test creator/i);
    const students = screen.getByText(/students/i);
    expect(tests).toBeInTheDocument();
    expect(testCreator).toBeInTheDocument();
    expect(students).toBeInTheDocument();
  });

  it('should render teacher greeting', () => {
    reduxRender(
      <BrowserRouter>
        <NavBar role="teacher" />
      </BrowserRouter>,
    );
    const teacherGreeting = screen.getByText(/hello, mr. /i);
    expect(teacherGreeting).toBeInTheDocument();
  });

  it('should render teacher avatar', () => {
    reduxRender(
      <BrowserRouter>
        <NavBar role="teacher" />
      </BrowserRouter>,
    );
    const teacherAvatar = screen.getByAltText(/teacher avatar/i);
    expect(teacherAvatar).toBeVisible();
  });
});

describe('Student role', () => {
  it('should render student avatar', () => {
    reduxRender(
      <BrowserRouter>
        <NavBar role="student" />
      </BrowserRouter>,
    );
    const studentAvatar = screen.getByAltText(/student avatar/i);
    expect(studentAvatar).toBeVisible();
  });

  it('should render student greeting', () => {
    const state = { role: 'student', currentStudent: { name: 'Jane' } };

    reduxRender(
      <BrowserRouter>
        <NavItems />
      </BrowserRouter>,
      { initialState: deserialize(serialize(state)) },
    );

    const name = screen.getByText(/jane/i);
    expect(name).toBeInTheDocument();
  });

  it('should not render teacher links', () => {
    const state = { role: 'student', currentStudent: { name: 'Jane' } };

    reduxRender(
      <BrowserRouter>
        <NavItems />
      </BrowserRouter>,
      { initialState: deserialize(serialize(state)) },
    );

    const myTests = screen.queryByRole('link', {
      name: /my tests/i,
    });
    const testCreator = screen.queryByRole('link', {
      name: /test creator/i,
    });
    const students = screen.queryByRole('link', {
      name: /students/i,
    });
    expect(myTests).not.toBeInTheDocument();
    expect(testCreator).not.toBeInTheDocument();
    expect(students).not.toBeInTheDocument();
  });
});
