import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialTests = [];

const tests = (state = initialTests, action) => {
  switch(action.type) {
    case actionTypes.GET_TESTS:
      
      return action.payload;
    default:
      return state;
  }

}

export default combineReducers({
  tests
});
