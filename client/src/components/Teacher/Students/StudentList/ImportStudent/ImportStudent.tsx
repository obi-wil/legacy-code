import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';

import CreateButton from '../../../../UI/CreateButton/CreateButton';
import { importStudents } from '../../../../../store/actions/studentListActions';
import styles from './ImportStudent.module.scss';

const ImportStudent = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const [ss, setSs] = useState([]);

  const dispatch = useDispatch();

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setHighlighted(false);
    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === 'text/csv')
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: true });
        setSs((sts) => [...sts, ...result.data]);
      });
  };

  const saveHandler = () => {
    dispatch(importStudents(ss));
    setTimeout(() => {
      setSs([]);
      props.close();
    }, 500);
  };

  return (
    <div className={styles.ImportStudent}>
      <div
        className={`${styles.DropDiv} ${
          highlighted ? styles.Highlighted : styles.NotHighlighted
        }`}
        onDragEnter={() => setHighlighted(true)}
        onDragLeave={() => setHighlighted(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={dropHandler}
      >
        Drop your files here
      </div>
      <div className={styles.DropList}>
        {ss.length ? ss.map((st, i) => <p key={i}>{st.name}</p>) : null}
      </div>
      <div className={styles.Buttons}>
        <CreateButton clicked={saveHandler}>
          <i className="fas fa-user-check"></i> Save
        </CreateButton>
        <CreateButton clicked={() => setSs([])}>
          <i className="fas fa-user-times"></i> Discard
        </CreateButton>
      </div>
    </div>
  );
};

export default ImportStudent;
