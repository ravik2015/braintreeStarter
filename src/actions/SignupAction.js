export function signup () {
  return dispatch => {
    //eslint-disable-line
    dispatch({ type: 'SIGNUP_REQUEST' })
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'SIGNUP_SUCCESS',
          payload: responseJson
        })
      })
      .catch(error => {
        if (error) {
          console.log('error getting client diets dashboard', error);
          dispatch({type: 'SIGNUP_REQUEST_FAIL'})
        }
      })
  }
}
