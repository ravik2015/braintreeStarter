// @flow
const INITIAL_STATE = {
    loading: false,
    loginData: []
 };
  
  function loginReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return Object.assign({}, state, { loading: true });
      case "LOGIN_SUCCESS":
        return Object.assign({}, state, {
          loginData: action.payload,
          loading: false
        });
      case "LOGIN_FAIL":
        return Object.assign({}, state, {
          error: "Enable to fetch data",
          loading: false
        });
      default:
        return state;
    }
  }
  
  export default loginReducer;
  