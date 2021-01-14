import React from 'react';

import styles from './QuestionCard.module.scss';

const QuestionCard = props => {
  return (
    <div className={styles.QuestionCard}>
      <i 
        className={`far fa-trash-alt ${styles.Bin}`}
        onClick={() => props.trashHandler(props.quest.question)}/>
      <div className={styles.QuestionTitle}>{props.quest.question}</div>
      <div className={styles.Answers}>
        {props.quest.options
          .map((opt, i) => (
          <div className={opt.correct ? styles.Option : undefined} key={i}>
            {opt.op}
          </div>))}
      </div>
    </div>
  )
};

export default QuestionCard;
