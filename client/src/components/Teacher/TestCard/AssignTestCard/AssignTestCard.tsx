import React from 'react';

import styles from './AssignTestCard.module.scss';

const AssignTestCard = props => {
  return (
    <React.Fragment>
      {props.show ? 
        (<div 
          className={styles.Background} 
          onClick={props.close}
        />) : null}
      <div 
        className={styles.AssignTestCard}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

// export default AssignTestCard;
export default React.memo(
  AssignTestCard,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
