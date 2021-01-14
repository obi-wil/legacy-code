import React from 'react';
import CreateButton from '../../../UI/CreateButton/CreateButton';

import styles from './QuestionCreator.module.scss';

const QuestionCreator = props => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.saveQuestion(e.target)
  }
  return (
    <div className={styles.QuestionCreator}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="question" placeholder="Question" autoComplete="off" required/>
        <input type="text" name="a" placeholder="Option a" autoComplete="off" required/>
        <input type="text" name="b" placeholder="Option b" autoComplete="off" required/>
        <input type="text" name="c" placeholder="Option c" autoComplete="off" required/>
        <input type="text" name="d" placeholder="Option d" autoComplete="off" required/>
        <select name="answer">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <div className={styles.Button}>

          <CreateButton type={'submit'}>Add Question</CreateButton>
        </div>
        {/* <input type="submit" value="save question"/> */}
      </form>
    </div>
  )
};

export default QuestionCreator;
