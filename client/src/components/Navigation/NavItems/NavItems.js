import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItems.module.scss';

const NavItems = () => {
  return (
    <ul className={styles.NavItems}>
      <li>
        <NavLink to='/tests' activeClassName={styles.active}>Tests</NavLink>
      </li>
      <li>
        <NavLink to='/students' activeClassName={styles.active}>Students</NavLink>
      </li>
    </ul>
  )
};

export default NavItems;
