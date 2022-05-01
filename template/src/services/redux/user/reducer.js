import types from './types';

const initialState = {
  isLogin: false,
  loginData: [],
  token: '',
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSuccess:
      return {
        ...state,
        loginData: action.payload.responseJson.data,
        token: '',
        isLogin: true,
      };
    case types.loginFailed:
      return {
        ...state,
        loginData: [],
        token: '',
        isLogin: false,
      };
    case types.logout:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
