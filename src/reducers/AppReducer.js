import { combineReducers } from 'redux'
import loginReducer from './auth/LoginReducer'
import signupReducer from './auth/SignupReducer'

const appReducer = combineReducers({
  loginReducer,
  signupReducer
})

export default appReducer
