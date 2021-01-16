import React, { useState, useEffect } from 'react';

import styles from './Answer.module.scss';

const Answer = props => {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {setClicked(false)}, [props.currQuest]);

  return (
    <div className={styles.OptionButton}>
      <button 
        className={clicked ? [styles.Button, styles[props.fb]].join(' ') : styles.Button}
        onClick={() => {
          setClicked(true);
          props.submitAnswerHandler(props.children);
        }}
        disabled={props.disableButton}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Answer;
