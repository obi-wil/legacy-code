import React from 'react';
import NavItems from '../NavItems/NavItems';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.TopBar}>
      <div className={styles.Container}>
        <p>Learning</p>
        <nav>
          <NavItems/>
        </nav>
      </div>
    </div>
   
  )
};

export default NavBar;
