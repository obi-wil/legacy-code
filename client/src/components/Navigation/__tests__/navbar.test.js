import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { reduxRender, screen } from '../../../utils/test-utils';
import NavBar from '../NavBar/NavBar';
import NavItems from '../NavItems/NavItems';

// TODO: assert role teacher renders vader image

// TODO: assert role student renders woman image

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
    expect(teacherAvatar).toBeInTheDocument();
  });
});

// TODO: assert if role student renders student greeting

// TODO: assert if role student renders student links
