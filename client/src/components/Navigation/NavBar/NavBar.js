import React from 'react';
import NavItems from '../NavItems/NavItems';

import styles from './NavBar.module.scss';

const NavBar = props => {
  return (
    <div className={styles.TopBar}>
      <div className={styles[props.role]}>
        <p>Learning</p>
        <nav>
          <NavItems/>
        </nav>
      </div>
    </div>
   
  )
};

export default NavBar;
