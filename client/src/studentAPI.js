const baseUrl = 'http://localhost:3002/student';

export function getStudents () {
  return fetchStudents(baseUrl);
};

export function postStudent (student) {
  return fetchStudents(baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(student)
  });
};

export function deleteStudent (id) {
  return fetchStudents(`${baseUrl}/${id}`, {
    method: 'DELETE'
  });
};

// export function getStudent () {

//   return fetchStudents(`${baseUrl}.json`, {
//     method: 'GET'
//   })
// }
// export function updateStudent (id, dir) {

//   return fetchStudents(`${baseUrl}/${id}/${dir}`, {
//     method: 'PUT'
//   })
// }


function fetchStudents (url, options) {
  return fetch(url, options)
    .then(res => {
      if (res.status < 400) return res;
      else Promise.reject(res)
    })
    .then(res => {
      if (res.status !== 204) return res.json();
      else return res;
    })
    .catch(err => console.log(err));
}
