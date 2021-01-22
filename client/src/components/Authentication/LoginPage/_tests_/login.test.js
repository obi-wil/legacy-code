import React from 'react';
import { fireEvent, render, screen } from '../../../../utils/test-utils';
import LoginPage from '../LoginPage';

// afterEach(cleanup);

describe('Login Form', () => {
  it('should render the login form', () => {
    render(<LoginPage />);
    const formUser = screen.getByLabelText('Username');
    const formPassword = screen.getByLabelText('Password');
    const button = screen.getByRole('button', { name: /Log in/i });
    expect(formUser).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should correctly submit the form', () => {
    const button = screen.getByRole('button', {
      name: /Log in/i,
      hidden: true,
    });
    console.log('button', button);

    fireEvent.submit(button); // verify what the submit event does
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
