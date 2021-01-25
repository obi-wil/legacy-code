import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authenticate } from '../../../store/actions/authActions';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const submitUserHandler = (e) => {
    e.preventDefault();
    dispatch(
      authenticate({
        name,
        pw,
      }),
    );
  };

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Login}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor="user-input">Username</label>
          <input
            id="user-input"
            type="text"
            name="personname"
            placeholder="Enter Username"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPw(e.target.value)}
          />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
