import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialTests = [];

const tests = (state = initialTests, action) => {
  switch(action.type) {
    case actionTypes.GET_TESTS:
      return action.payload;
    case actionTypes.POST_TEST:
      return action.payload;
    case actionTypes.DELETE_TEST:
      return state.filter(test => test._id !== action.payload);
    default:
      return state;
  };
};

const initialRole = 'student';

const role = (state = initialRole, action) => {
  switch(action.type) {
    default:
      return state;
  };
};

const initialStudentList = [];

const students = (state = initialStudentList, action) => {
  switch(action.type) {
    case actionTypes.GET_STUDENTS:
      return action.payload;
    default:
      return state;
  };
};

export default combineReducers({
  tests,
  role,
  students
});
