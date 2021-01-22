import React from 'react';
import { fireEvent, reduxRender, screen } from '../../../../utils/test-utils';
import NavBar from '../NavBar/NavBar';
import NavItems from '../NavItems/NavItems';

// TODO: assert role teacher renders vader image
describe('NavBar', () => {
  it('should render teacher avatar', () => {
    reduxRender(<NavBar />);
    const teacherAvatar = screen.getByAltText('teacher avatar');

    expect(teacherAvatar).toBeInTheDocument();
  });
});

// TODO: assert role student renders woman image

// TODO: assert if role teacher renders greeting text

// TODO: assert if role teacher renders teacher links

// TODO: assert if role student renders student greeting

// TODO: assert if role student renders student links
