import React from 'react';
import NavBar from '../Navigation/NavBar/NavBar';

import styles from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <NavBar role={props.role} />
      <div className={styles[props.role]}>{props.children}</div>
    </div>
  );
};

export default Layout;
