import * as actionTypes from './actionTypes';

export const authenticate = (input) => {
  return dispatch => {
    let role;
    if (input.logout) role = 'none';
    else role = (input.name === 'vader_loveislove') ? 'teacher' : 'student';
    
    dispatch({type: actionTypes.AUTHENTIFY, payload: {role: role}});
  };
};
