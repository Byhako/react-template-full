import React, { Component }  from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'


class AppRouter extends Component {

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<HandleRoute path="/:content" component={App} />*/}
        </Switch>
      </Router>
    )
  }
}

const HandleRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={ renderProps => {
      const authenticade = localStorage.getItem('isAuthenticated')
      return authenticade ?
        <Component {...renderProps} /> :
        <Redirect to={{ pathname: '/', state: { from: renderProps.location } }} />
    }}
  />
)

export default AppRouter