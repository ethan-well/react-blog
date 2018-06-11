const apiServer = 'http://localhost:3000'
export const postHandler = (url, data, callback) => {
  fetch(`${apiServer}/${url}`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => callback(response))
}

export const GetHandler = (url, callback) => {
  fetch(`${apiServer}/${url}`)
  .then(response => response.json())
  .catch(error => console.error('Error', error))
  .then(response => callback(response))
}

export const PutHandler = (url, data, callback) => {
  fetch(`${apiServer}/${url}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => callback(response))
}

export const DeleteHandler = (url, callback) => {
  fetch(`${apiServer}/${url}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .then(response => callback(response))
  .catch(error => console.log('Error', error))
}
