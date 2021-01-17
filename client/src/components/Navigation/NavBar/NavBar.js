import React from 'react';
import LogoutButton from '../../Authentication/LoginPage/LogoutButton';
import NavItems from '../NavItems/NavItems';

import styles from './NavBar.module.scss';

const NavBar = props => {

  // const MyPromise = require('some-promise-lib');
  // const confetti = require('canvas-confetti');
  // confetti.Promise = MyPromise;

  return (
    <div className={styles.TopBar}>
      <div className={styles[props.role]}>
        <p>Learning</p>
        <nav>
          <NavItems/>
        </nav>
      <LogoutButton/>
      </div>
    </div>
   
  )
};

export default NavBar;
