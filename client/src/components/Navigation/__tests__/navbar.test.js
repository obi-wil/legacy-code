import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxRender, screen, cleanup } from '../../../utils/test-utils';
import { mockState } from '../../../utils/mocks.global';
import { deserialize, serialize } from 'v8';
import NavBar from '../NavBar/NavBar';
import NavItems from '../NavItems/NavItems';

// Redux.useSelector = jest.fn();
// Redux.useDispatch = () => jest.fn(); // need??

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
});

// TODO: assert if role student renders student greeting

// TODO: assert if role student renders student links
