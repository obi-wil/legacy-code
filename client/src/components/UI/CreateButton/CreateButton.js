import React from 'react';

import styles from './CreateButton.module.scss';

const CreateButton = props => {
  return (
    <button onClick={props.clicked} className={styles.Button}>{props.children}</button>
  )
};

export default CreateButton;
