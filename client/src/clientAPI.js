const baseUrl = 'http://localhost:3002/test';

export function getTests () {
  console.log('from clientAPI fetching tests')
  return fetchTests(baseUrl)
}

// export function postTest (test) {

//   return fetchTests(baseUrl + '.json', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(test)
    
//   })
// }

// export function getTest () {

//   return fetchTests(`${baseUrl}.json`, {
//     method: 'GET'
//   })
// }
// export function updateTest (id, dir) {

//   return fetchTests(`${baseUrl}/${id}/${dir}`, {
//     method: 'PUT'
//   })
// }

// export function deleteTest (id) {
//   return fetchTests(`${baseUrl}/${id}`, {
//     method: 'DELETE'
//   })
// }

function fetchTests (url, options) {
  return fetch(url, options)
    .then(res => {
      if (res.status < 400) return res;
      else return Promise.reject(res)
    })
    .then(res => {
      if (res.status !== 204) return res.json();
      else return res;
    })
    .catch(err => console.log(err));
}
