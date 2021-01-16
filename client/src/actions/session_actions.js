
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js'

//action Creators Async => Have to use a Thunk action for async
export const signIn = (formData, history) => async (dispatch){
  try {
    // log in the user 

    // after log in will redirect to homepage 
    history.push('/')
    console.log('youve been signed it and it works')
  } catch (error) {
      console.log(error)
  }
}
export const signUp = (formData, history) => async (dispatch){
  try {
    // sign up the user 

    // after log in will redirect to homepage 
    history.push('/')

  } catch (error) {
      console.log(error)
  }
}



// import * as APIUtil from '../api/session_api_util'
// import jwt_decode from 'jwt-decode'

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
// export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// // Action Creators 
// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });

// export const receiveUserSignIn = () => ({
//   type: RECEIVE_USER_SIGN_IN
// });

// export const receiveErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// export const clearErrors = () => ({
//   type: CLER_ERRORS
// })

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_USER
// });


// // Thunk Action Creators
// export const signupUser = user => dispatch => (
//   APIUtil.signupUser(user)
//     .then( (res) => {
//             const { token } = res.data;
//             localStorage.setItem('jwtToken', token);
//             APIUtil.setAuthToken(token);

//             const decoded = jwt_decode(token);

//             console.log(decoded, 'this is the decoded ')
//             dispatch(receiveCurrentUser(decoded))
//     // dispatch(receiveUserSignIn())
//   })
//   .catch(err => dispatch(receiveErrors(err.response.data)))
// );

// export const loginUser = user => dispatch => (
//   APIUtil.loginUser(user)
//     .then( (res) => {
//         const { token } = res.data;
//         localStorage.setItem('jwtToken', token);
//         APIUtil.setAuthToken(token);

//         const decoded = jwt_decode(token);
//         dispatch(receiveCurrentUser(decoded))
//   })
//   .catch(err => {
//     dispatch(receiveErrors(err.response.data));
//   })
// )

// export const logoutUser = () => dispatch => {
//   localStorage.removeItem('jwtToken')
//   APIUtil.setAuthToken(false)
//   dispatch(logoutCurrent())
// };