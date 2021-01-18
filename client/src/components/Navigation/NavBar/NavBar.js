import React from 'react';
import LogoutButton from '../../Authentication/LoginPage/LogoutButton';
import NavItems from '../NavItems/NavItems';

import styles from './NavBar.module.scss';

const NavBar = props => {

  return (
    <div className={styles.TopBar}>
      <div className={styles[props.role]}>
        <p>Logo</p>
        <nav>
          <NavItems/>
        </nav>
      <LogoutButton/>
      </div>
    </div>
   
  )
};

export default NavBar;
