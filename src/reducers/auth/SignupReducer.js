// @flow
const INITIAL_STATE = {
    loading: false,
    signupData: []
 };
  
  function signupReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
      case "SIGNUP_REQUEST":
        return Object.assign({}, state, { loading: true });
      case "SIGNUP_SUCCESS":
        return Object.assign({}, state, {
          signupData: action.payload,
          loading: false
        });
      case "SIGNUP_FAIL":
        return Object.assign({}, state, {
          error: "Enable to fetch data",
          loading: false
        });
      default:
        return state;
    }
  }
  
  export default signupReducer;
  