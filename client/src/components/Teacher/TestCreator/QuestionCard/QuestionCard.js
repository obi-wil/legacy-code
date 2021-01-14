import React from 'react';

import styles from './QuestionCard.module.scss';

const QuestionCard = props => {
  return (
    <div className={styles.QuestionCard}>
      <i 
        className={`far fa-trash-alt ${styles.Trash}`}
        onClick={() => props.trashHandler(props.quest.title)}/>
      <div className={styles.QuestionTitle}>{props.quest.title}</div>
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
