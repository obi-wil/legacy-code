import React from 'react';
import NavBar from '../Navigation/NavBar/NavBar';

import styles from './Layout.module.scss';

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <NavBar/>
      {console.log('reloading layout')}
      <div className={styles.Content}>{props.children}</div>
    </div>
  )
};

export default Layout;
