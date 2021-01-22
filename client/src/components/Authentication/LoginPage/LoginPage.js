import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authenticate } from '../../../store/actions/authActions';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch();

  const submitUserHandler = (e) => {
    e.preventDefault();
    console.log(e.target.personname, 'e.target.personnamez');
    console.log(e.target.password, 'e.target.password');
    dispatch(
      authenticate({
        name: e.target.personname.value,
        pw: e.target.password.value,
      }),
    );
  };

  useEffect(() => {}, [role]);

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
          />
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
