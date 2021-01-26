import React from 'react';
import NavBar from '../Navigation/NavBar/NavBar';

import styles from './Layout.module.scss';

interface Prop {
  role: string;
  children: React.ReactNode; //accepts all React-compatible elements
}

const Layout = (props: Prop) => {
  return (
    <div className={styles.Layout}>
      <NavBar role={props.role} />
      <div className={styles[props.role]}>{props.children}</div>
    </div>
  );
};

export default Layout;
