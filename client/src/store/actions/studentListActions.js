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
    studentAPI.getStudent('6002126682bc5ff80956aec3')
      .then(data => dispatch({type: actionTypes.GET_STUDENT, payload: data}));
  };
};

export const updateStudentResults = (ssid, status, testResults) => {
  return dispatch => {
    studentAPI.updateStudentTests(ssid, status, testResults)
      .then(data => {
        console.log(data)
        dispatch({type: actionTypes.GET_STUDENT, payload: data});
        dispatch({type: actionTypes.RESET_PROGRESS});
      });
  }
};

export const updateStudentsPendingTests = (testid, status, studentsList) => {
  return dispatch => {
    studentAPI.updateStudentTests(testid, status, studentsList)
      .then(data => {
        console.log(data)
        dispatch({type: actionTypes.GET_STUDENTS, payload: data});
      });
  }
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
