import types from './types';

export function LoginSuccess(responseJson) {
  return dispatch => {
    dispatch({type: types.loginSuccess, payload: {responseJson}});
  };
}

export function LoginFailed(responseJson) {
  return dispatch => {
    dispatch({type: types.loginFailed, payload: {responseJson}});
  };
}

export function Logout() {
  return dispatch => {
    dispatch({type: types.logout});
  };
}
