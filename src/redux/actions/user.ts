import { Dispatch } from 'redux';

// Types:
export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION';
export const LOGIN_USER_SUCCESS_ACTION = 'LOGIN_USER_SUCCESS_ACTION';
export const LOGIN_USER_ERROR_ACTION = 'LOGIN_USER_ERROR_ACTION';
export const LOGOUT_USER_ACTION = 'LOGOUT_USER_ACTION';

// Creators:
// ...

// Thunks:
export const loginUserAction = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_USER_ACTION });

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (data.error) {
    dispatch({ type: LOGIN_USER_ERROR_ACTION, payload: data.error });
  } else {
    dispatch({
      type: LOGIN_USER_SUCCESS_ACTION,
      access_token: data.access_token,
      refresh_token: data.refresh_token
    });
  }

  return data;
};

// Pending thunk for logout...
