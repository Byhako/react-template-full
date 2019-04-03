export default { admin, setSumar }

const baseUrl = 'http://localhost:3000'

const debug = (tag, format, text='') => console.log(tag, format, text)
const handleResponse = (response) => {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json)
  })
}

// Usamos redux-thunks para poder pasar el dispatch
// como argumento a la funcion, ya que dentro de ella
// hacemos mas de un dispatch, de lo contrario no lo
// necesitamos y podemos retornar la accion como en
// la funcion Setsumar
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
    fetch(url, miInit)
      .then(handleResponse)
      .then(data => {
          dispatch({ type: 'SET_ADMIN', admin: data })
          dispatch({ type: 'SET_AUTHORIZATION', authorization: true })
      })
      .catch(err => {
        debug('%cError in response admin:', "color: #CC0000;", err)
      })
  }
}

function setSumar () {
  debug("%cSET SUMAR", "color: #3465A4; font-weight: bold;" )
  return { type: 'SET_SUMAR' }
}
