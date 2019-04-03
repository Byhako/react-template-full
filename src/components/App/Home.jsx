import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

import './home.styl'

import react from '../../images/react.png'
import redux from '../../images/redux.png'
import stylus from '../../images/stylus.png'
import webpack from '../../images/webpack.png'

class Home extends Component {
  sumar = () => this.props.Add()

  render () {
    return (
      <Fragment>
        <nav className='nav'>
          <span>Enjoy hacking with React</span>
          <p>{this.props.variable}</p>
          <button onClick={this.sumar}>Sumar</button>
        </nav>
        <div className="row">
          <img src={react} alt="react"/>
          <img src={stylus} alt="stylus"/>
          <img src={redux} alt="redux"/>
        </div>
        <div className="row">
          <img id='webpack' src={webpack} alt="webpack"/>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    variable: state.variable
  }
}

const mapDispatchToProps = dispatch => ({
  Add: () => dispatch(actions.setSumar()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
