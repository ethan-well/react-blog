export const postHandler = (url, data, callback) => {
  fetch(url, {
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
  fetch(url)
  .then(response => response.json())
  .catch(error => console.error('Error', error))
  .then(response => callback(response))
}

export const PutHandler = (url, data, callback) => {
  fetch(url, {
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
