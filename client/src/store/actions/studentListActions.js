import * as actionTypes from './actionTypes';
import * as studentAPI from '../../studentAPI';

export const fetchStudents = () => {
  return dispatch => {
    studentAPI.getStudents()
      .then(data => dispatch({type: actionTypes.GET_STUDENTS, payload: data}));
  };
};

export const fetchStudent = () => {
  return dispatch => {
    studentAPI.getStudent('6002105982bc5ff80956aeba')
      .then(data => dispatch({type: actionTypes.GET_STUDENT, payload: data}));
  };
};


// export const postStudent = (questions, title) => {
//   return dispatch => {
//     studentAPI.postStudent({questions, title})
//       .then(data => dispatch({type: actionTypes.POST_STUDENT, payload: data}));
//   };
// };

// export const deleteStudent = (id) => {
//   return dispatch => {
//     studentAPI.deleteStudent(id)
//       .then(data => dispatch({type: actionTypes.DELETE_STUDENT, payload: id}));
//   };
// };
