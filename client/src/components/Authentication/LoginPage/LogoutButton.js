import React from 'react';
import { useDispatch } from 'react-redux';

import { authenticate } from '../../../store/actions/authActions';
import styles from './LogoutButton.module.scss';

const LogoutButton = props => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authenticate({
      name: '',
      logout: 'logout'
    }));
  }

  return (
    <div className={props.ipad ? styles.LogoutButtonIpad : styles.LogoutButton} onClick={logoutHandler}>
      Log out
    </div>
  );
};

export default LogoutButton;
