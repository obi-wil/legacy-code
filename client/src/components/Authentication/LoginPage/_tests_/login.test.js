import React from 'react';
import { cleanup, reduxRender, screen } from '../../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import LoginPage from '../LoginPage';
import { authenticate } from '../../../../store/actions/authActions';

// mocks submit
jest.mock('../../../../store/actions/authActions', () => {
  return {
    authenticate: jest.fn((data) => data),
  };
});

afterEach(cleanup);

describe('Login Form', () => {
  it('should render the login form', () => {
    reduxRender(<LoginPage />);
    const formUser = screen.getByLabelText('Username');
    const formPassword = screen.getByLabelText('Password');
    const button = screen.getByRole('button', { name: /Log in/i });
    expect(formUser).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should correctly submit the form', () => {
    // const onSubmit = jest.fn();
    reduxRender(<LoginPage />);
    // const button = screen.getByRole('button', {
    //   name: /Log in/i,
    //   hidden: true,
    // });

    const formUser = screen.getByLabelText(/Username/i);
    const formPassword = screen.getByLabelText(/Password/i);

    userEvent.type(formUser, 'Andrea');
    userEvent.type(formPassword, '123456');

    expect(formUser).toHaveValue('Andrea');
    expect(formPassword).toHaveValue('123456');

    userEvent.click(screen.getByRole('button', { name: /Log in/i })); // verify what the submit event does

    expect(authenticate).toHaveBeenCalledWith({
      personname: 'Andrea',
      pw: '123456',
    });
  });
});

// test('should correctly dispatch the user', () => {

// })

// mocks --> to mimick calls to API/Database
// first you require your db model
// const database = require("../../../../../../server/models/student.model")
// jest.mock("module that you want to mock")
// database.getUser = jest.fn(() => {
//   return {
//     //something
//   }
// })
