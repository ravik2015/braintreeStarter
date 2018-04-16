import React from 'react'
import { signup } from '../actions/SignupAction'
import { connect } from 'react-redux'
import Signup from '../components/Signup'

class SignupContainer extends React.Component {
  componentDidMount () {
    this.props.signup()
  }

  render () {
    return <Signup />
  }
}

function mapUser (state) {
  return { signupReducer: state.signupReducer }
}

export default connect(mapUser, { signup })(SignupContainer)
