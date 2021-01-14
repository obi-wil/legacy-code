import * as actionTypes from './actionTypes';
import * as clientAPI from '../../clientAPI';

export const fetchTests = () => {
  return dispatch => {
    clientAPI.getTests()
      .then(data => dispatch({type: actionTypes.GET_TESTS, payload: data}));
  };
};

export const postTest = (questions, title) => {
  return dispatch => {
    clientAPI.postTest({questions, title})
      .then(data => dispatch({type: actionTypes.POST_TEST, payload: data}));
  };
};

export const deleteTest = (id) => {
  return dispatch => {
    clientAPI.deleteTest(id)
      .then(data => dispatch({type: actionTypes.DELETE_TEST, payload: id}));
  };
};
