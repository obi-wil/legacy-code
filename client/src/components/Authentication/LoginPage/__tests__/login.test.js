import React from 'react';
import { cleanup, reduxRender, screen } from '../../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import LoginPage from '../LoginPage';
import { authenticate } from '../../../../store/actions/authActions';
import { mockState } from '../../../../utils/mocks.global';
import { deserialize, serialize } from 'v8';
import * as Redux from 'react-redux';
import LogoutButton from '../LogoutButton';

// redux mocks
Redux.useSelector = jest.fn();
Redux.useDispatch = () => jest.fn();

// mocks authenticate dispatcher
jest.mock('../../../../store/actions/authActions', () => {
  return {
    authenticate: jest.fn((data) => {
      return { type: 'test', payload: data };
    }),
  };
});

afterEach(cleanup);

describe('Login Form', () => {
  it('should render the login form', () => {
    reduxRender(<LoginPage />, {
      initialState: deserialize(serialize(mockState)),
    });
    const formUser = screen.getByLabelText('Username');
    const formPassword = screen.getByLabelText('Password');
    const button = screen.getByRole('button', { name: /Log in/i });
    expect(formUser).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should correctly dispatch the auth action at submit', () => {
    reduxRender(<LoginPage />);
    const button = screen.getByRole('button', {
      name: /Log in/i,
      hidden: true,
    });
    const formUser = screen.getByLabelText(/Username/i);
    const formPassword = screen.getByLabelText(/Password/i);

    userEvent.type(formUser, 'Andrea');
    userEvent.type(formPassword, '123456');

    expect(formUser).toHaveValue('Andrea');
    expect(formPassword).toHaveValue('123456');

    userEvent.click(button); // verify what the submit event does

    expect(authenticate).toHaveBeenCalledTimes(1);
    expect(authenticate).toHaveBeenCalledWith({ name: 'Andrea', pw: '123456' });
  });
});

describe('Logout', () => {
  test('should correctly render the logout component', () => {
    reduxRender(<LogoutButton />);
    const logoutButton = screen.getByText(/Log out/i);
    expect(logoutButton).toBeInTheDocument();
  });

  test('should correctly dispatch the auth action', () => {
    reduxRender(<LogoutButton />);
    const logoutButton = screen.getByText(/Log out/i);
    userEvent.click(logoutButton);
    expect(authenticate).toHaveBeenCalledTimes(1);
  });
});
