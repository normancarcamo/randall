import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';

export interface State {
  user?: UserState;
}

export const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
