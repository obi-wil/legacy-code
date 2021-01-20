import React from 'react';

import logo from '../../../assets/logobd.png';
import LogoutButton from '../../Authentication/LoginPage/LogoutButton';
import NavItems from '../NavItems/NavItems';
import styles from './NavBar.module.scss';


const NavBar = props => {

  return (
    <div className={styles.TopBar}>
      <div className={styles[props.role]}>
        <img src={logo} style={{
          width: '90px'
        }}/>
        <nav>
          <NavItems/>
        </nav>
        <div className={styles.LogoutArea}>
        <div className={styles.LogoutButton}>
          {props.role === 'teacher' ? <span>Hello, Mr. Vader</span> : null}
          {props.role === 'teacher' ? 
          <LogoutButton ipad={false}/> : 
          <LogoutButton ipad={true}/>}
          {/* <LogoutButton/> */}
        </div>

          {props.role === 'teacher' ?
          
          (<img 
            src='https://res.cloudinary.com/garmobal/image/upload/v1611053637/learntoday/Screenshot_2021-01-19_at_11.53.36_iwxss0.png' 
            style={{
              width: '55px',
              height: '55px',
              borderRadius: '50px'
            }}
        />) : 
        (<img 
            src='https://res.cloudinary.com/garmobal/image/upload/v1611018620/learntoday/Screenshot_2021-01-19_at_02.08.35_nxybno.png' 
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50px'
            }}
        />)} 
        </div>
      </div>
    </div>
   
  )
};

export default NavBar;
