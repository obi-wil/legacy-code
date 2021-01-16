import React from 'react';
import Answer from '../Answer/Answer';
import styles from './Question.module.scss';

const Question = props => {

  return (
    <div className={styles.Question}>
      <div className={styles.QuestionTitle}>

        {props.question.question}
      </div>
      <div className={styles.Options}>
        {
          props.question.options.map((opt) => (
            <div className={styles.OptionButton}><Answer>{opt}</Answer></div>
          ))
        }
      </div>
    </div>
  );
};

export default Question;
