export default { admin }

const baseUrl = 'http://localhost:3000'

function admin (admin) {
  console.log("%cADMIN", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/login`
    const body = {
      user: admin.user,
      password: admin.password
    }
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request admin ok')
          return response.json()
        } else { console.log('Error in request admin:', response) }
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log('%cError in response admin:', "color: #CC0000;", err)
      })
  }
}
