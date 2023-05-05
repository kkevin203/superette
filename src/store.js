import { legacy_createStore as createStore, } from 'redux'

const initialState = {
    isLoggedIn: false
  };

  export const setLoggedIn = (isLoggedIn) => ({
    type: isLoggedIn ? 'LOGIN' : 'LOGOUT',
    payload: isLoggedIn
  });

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false
        };
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);
  
  export default store;