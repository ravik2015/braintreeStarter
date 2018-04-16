export function login () {
  return dispatch => {
    //eslint-disable-line
    dispatch({ type: 'LOGIN_REQUEST' })
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: responseJson
        })
      })
      .catch(error => {
        if (error) {
          console.log('error getting client diets dashboard', error)
          dispatch({ type: 'LOGIN_REQUEST_FAIL' })
        }
      })
  }
}
