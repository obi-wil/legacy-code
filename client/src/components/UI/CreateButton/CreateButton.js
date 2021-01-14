import React from 'react';

import styles from './CreateButton.module.scss';

const CreateButton = props => {
  return (
    <button 
      onClick={props.clicked} 
      className={styles.Button}
      type={props.type}
    >{props.children}</button>
  )
};

export default CreateButton;
