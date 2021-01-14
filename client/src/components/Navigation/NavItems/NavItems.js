import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './NavItems.module.scss';

const NavItems = () => {

  const role = useSelector(state => state.role);

  const navigation = {
    teacher: (
      <React.Fragment>
        <li>
          <NavLink to='/tests' activeClassName={styles.active}>Tests</NavLink>
        </li>
        <li>
          <NavLink to='/students' activeClassName={styles.active}>Students</NavLink>
        </li>
      </React.Fragment>
    ),
    student: (<p>Hello</p>)
  }

  return (
    <ul className={styles.NavItems}>
      {navigation[role]}
    </ul>
  )
};

export default NavItems;
