import React, { useState } from 'react';

import styles from './SelectStudent.module.scss';

const SelectStudent = props => {

  const [selected, setSelected] = useState(false);

  const toggleSelected = () => setSelected(!selected)
  return (
    <div 
      className={selected ? styles.Selected : styles.Unselected}
      onClick={() => {
        toggleSelected();
        props.selectNameHandler(props.student);
      }
      }
    >{props.children}</div>
  );
};

export default SelectStudent;
