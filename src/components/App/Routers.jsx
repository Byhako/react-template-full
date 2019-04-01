import React, { Component }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'


class AppRouter extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter
