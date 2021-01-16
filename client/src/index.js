// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux'
// import { RootReducer } from './reducers/root_reducer.js';

// import App from './App';

// const store = createStore( RootReducer, applyMiddleware(thunk));

// ReactDOM.render( 
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
//   );

import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthToken } from "./api/session_api_util";
import jwt_decode from "jwt-decode";
import configureStore from "./store/store";
// import { logoutUser } from './actions/session_actions'

import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      // store.dispatch(logout());
      window.location.href = "/";
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");
  window.store = store;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
