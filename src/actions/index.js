export default { admin }

const baseUrl = 'http://localhost:3000'

const debug = (tag, format, text='') => console.log(tag, format, text)
const handleResponse = (response) => {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json)
  })
}

function admin (admin) {
  debug("%cADMIN", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin`
    const body = { ...admin }
    const miInit = {
      method: 'POST', mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    return fetch(url, miInit)
      .then(handleResponse)
      .then(data => {
          dispatch({ type: 'SET_ADMIN', admin: data })
      })
      .catch(err => {
        debug('%cError in response admin:', "color: #CC0000;", err)
      })
  }
}
