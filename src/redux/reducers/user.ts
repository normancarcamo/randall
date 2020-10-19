import jwtDecode from 'jwt-decode';
import { AnyAction } from 'redux';

import { LOGIN_USER_SUCCESS_ACTION } from '~redux/actions/user';

export interface UserState {
  _id: string;
  email: string;
  isLoggedIn: boolean;
  name: { first: string; last: string };
}

const initialState: UserState = {
  _id: null,
  email: null,
  isLoggedIn: false,
  name: null
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS_ACTION: {
      const { _id, email, name } = jwtDecode(action.access_token);
      return {
        ...state,
        _id,
        email,
        isLoggedIn: true,
        name
      };
    }
    default:
      return state;
  }
}
