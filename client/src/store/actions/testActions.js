import * as actionTypes from './actionTypes';
import * as clientAPI from '../../clientAPI';

export const fetchTests = () => {
   return dispatch => {
     clientAPI.getTests()
      .then(data => dispatch({type: actionTypes.GET_TESTS, payload: data}));
   }
}
