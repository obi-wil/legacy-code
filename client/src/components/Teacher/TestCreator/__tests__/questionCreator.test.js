import React from 'react';
import { cleanup, reduxRender, screen } from '../../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import TestCreator from '../TestCreator';
import QuestionCreator from '../QuestionCreator/QuestionCreator';

afterEach(cleanup);

describe('Question Creator', () => {
  test('should correctly render the test creator', () => {
    reduxRender(<QuestionCreator />);
    const [input1, input2, input3, input4] = screen.getAllByRole('textbox');
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
  });

  test('should ', () => {});
});
