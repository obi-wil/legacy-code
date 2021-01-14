const baseUrl = 'http://localhost:3002/test';

export function getTests () {
  return fetchTests(baseUrl)
}

export function postTest (test) {
  console.log('from clientAPI POSTING tests')
  return fetchTests(baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(test)
  })
}

export function deleteTest (id) {
  return fetchTests(`${baseUrl}/${id}`, {
    method: 'DELETE'
  })
}

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


function fetchTests (url, options) {
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
