import React from 'react';
import { fireEvent, reduxRender, screen } from '../../../../utils/test-utils';
import LoginPage from '../LoginPage';

// afterEach(cleanup);

describe('Login Form', () => {
  it('should render the login form', () => {
    reduxRender(<LoginPage />);
    const formUser = screen.getByLabelText('Username');
    const formPassword = screen.getByLabelText('Password');
    const button = screen.getByRole('button', { name: /Log in/i });
    console.log(button);
    expect(formUser).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should correctly submit the form', () => {
    reduxRender(<LoginPage />);
    const button = screen.getByRole('button', {
      name: /Log in/i,
      hidden: true,
    });

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
