import React, { useState, /* useEffect */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Answer from '../Answer/Answer';
import styles from './Question.module.scss';
import { checkUserAnswer } from '../../../../store/actions/testActions';

const Question = props => {

  const [userIsAnswering, setuserIsAnswering] = useState(true);

  const dispatch = useDispatch();
  const progress = useSelector(state => state.progress);

  // useEffect(() => {}, [props.currQuest]);

  const submitAnswerHandler = (userAnswer) => {

    // DISABLEBUTTONS
    
    const answerObject = {
      learner: true,
      answer: userAnswer,
      qid: props.question._id,
      question: props.question.question,
      testid: props.testid
    };
    dispatch(checkUserAnswer(answerObject));
    setuserIsAnswering(false);
  };

  let feedbackStyle = 'waiting';
  if (progress[props.currQuest]) {
    feedbackStyle = progress[props.currQuest].correct ? 'correct' : 'incorrect';
  }

  const nextButtonHandler = () => {
    setuserIsAnswering(true) // HERE
    props.nextButton();
  }

  return (
    <div className={styles.Question}>
      <div className={styles.QuestionTitle}>
        {props.question.question} 
      </div>
      <div className={styles.Options}>
        {
          props.question.options.map((opt, i) => (
            <Answer 
              key={i} 
              submitAnswerHandler={submitAnswerHandler}
              disableButton={!userIsAnswering}
              fb={feedbackStyle}
              currQuest={props.currQuest}
            >{opt}</Answer>
          ))
        }
      </div>
      <div className={styles.NextButtonContainer}>
        <button 
          className={styles.NextButton} onClick={nextButtonHandler} 
          disabled={userIsAnswering}
        ><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

// Conditionally change answers display to a single column when there are more characters.

export default Question;
