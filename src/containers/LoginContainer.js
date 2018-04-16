import React from 'react'
import { login } from '../actions/LoginAction'
import { connect } from 'react-redux'
import Login from '../components/Login'

class LoginContainer extends React.Component {
  componentDidMount () {
    this.props.login()
  }

  render () {
    return <Login />
  }
}

function mapUser (state) {
  return { loginReducer: state.loginReducer }
}

export default connect(mapUser, { login })(LoginContainer)
