import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../../Interfaces';

import styles from './NavItems.module.scss';

// check how to accept only literal string student/teacher
interface Navigation {
  [key: string]: JSX.Element;
}

const NavItems = () => {
  const role = useSelector((state: State) => state.role);
  const student = useSelector((state: State) => state.currentStudent);

  const navigation: Navigation = {
    teacher: (
      <ul className={styles.NavItems}>
        <li>
          <NavLink to="/tests" activeClassName={styles.active}>
            My tests
          </NavLink>
        </li>
        <li>
          <NavLink to="/testcreator" activeClassName={styles.active}>
            Test creator
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" activeClassName={styles.active}>
            Students
          </NavLink>
        </li>
      </ul>
    ),
    student: (
      <div className={styles.Welcome}>
        <span>Hello</span> {student.name}!
      </div>
    ),
  };

  return <React.Fragment>{navigation[role]}</React.Fragment>;
};

export default NavItems;
