import React from 'react';
import { cleanup, reduxRender, screen } from '../../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import * as reactModule from 'react';
// import TestCreator from '../TestCreator';
// import { postTest } from '../../../../store/actions/testActions';
// import { mockState } from '../../../../utils/mocks.global';
// import { deserialize, serialize } from 'v8';
import QuestionCreator from '../QuestionCreator/QuestionCreator';

afterEach(cleanup);

Redux.useDispatch = () => jest.fn();

jest.mock('../../../../store/actions/testActions', () => {
  return {
    postTest: jest.fn((data) => {
      return { type: 'dispatch test', payload: data };
    }),
  };
});

describe('Question Creator', () => {
  let setTitleValue;
  let setIsValid;
  let setQuestions;

  beforeEach(() => {
    setTitleValue = jest.fn((title) => {});

    reactModule.useState = jest
      .fn()
      .mockImplementationOnce((titleValue) => [titleValue, setTitleValue])
      .mockImplementationOnce((questions) => [questions, setQuestions])
      .mockImplementationOnce((isValid) => [isValid, setIsValid]);
  });

  test('should correctly render the test creator', () => {
    reduxRender(<QuestionCreator />);
    const [input1, input2, input3, input4] = screen.getAllByRole('textbox');
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
  });

  test('should correctly set the title of the question', async () => {
    reduxRender(<QuestionCreator />);

    const titleInput = screen.getByPlaceholderText(/question/i);
    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue('');
    await userEvent.type(titleInput, 'test');
    expect(titleInput).not.toBeNull();

    expect(setTitleValue).toHaveBeenCalledWith('t');
    expect(setTitleValue).toHaveBeenCalledWith('e');
    expect(setTitleValue).toHaveBeenCalledWith('s');
    expect(setTitleValue).toHaveBeenCalledWith('t');
    expect(setTitleValue).toHaveBeenCalledTimes(4);
  });

  test('should correctly save questions', () => {
    const saveQuestionHandler = jest.fn(() => {});
    reduxRender(<QuestionCreator saveQuestionHandler={saveQuestionHandler} />);

    const submitQuestionsInputs = screen.getAllByPlaceholderText(
      /Option [a|b|c|d]/i,
    );

    userEvent.type(submitQuestionsInputs[0], 'Question 1');
    expect(submitQuestionsInputs[0]).not.toBeNull();
    userEvent.click(submitQuestionsInputs[0]);
    expect(saveQuestionHandler).toHaveBeenCalledTimes(1);
    // expect(submitQuestionsInputs[0]).to

    // userEvent.click(submitTitleBtns);

    // expect(postTest).toHaveBeenCalledTimes(1);
  });
});
