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
    studentAPI.getStudent('60009f5970723cc5f228061a')
      .then(data => dispatch({type: actionTypes.GET_STUDENT, payload: data}));
  };
};

export const updateStudentResults = (ssid, status, testResults) => {
  return dispatch => {
    studentAPI.updateStudentTests(ssid, status, testResults)
      .then(data => {
        dispatch({type: actionTypes.GET_STUDENT, payload: data});
        dispatch({type: actionTypes.RESET_PROGRESS});
      });
  }
};

export const updateStudentsPendingTests = (testid, status, studentsList) => {
  return dispatch => {
    studentAPI.updateStudentTests(testid, status, studentsList)
      .then(data => {
        dispatch({type: actionTypes.GET_STUDENTS, payload: data});
      });
  }
};

export const importStudents = (newSs) => {
  return dispatch => {
    studentAPI.importStudents(newSs)
      .then(data => {
        dispatch({type: actionTypes.POST_STUDENTS, payload: data});
      });
  }
};

// export const deleteStudent = (id) => {
//   return dispatch => {
//     studentAPI.deleteStudent(id)
//       .then(data => dispatch({type: actionTypes.DELETE_STUDENT, payload: id}));
//   };
// };
