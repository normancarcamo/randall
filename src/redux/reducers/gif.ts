import { AnyAction } from 'redux';

import { SEARCH_GIF_SUCCESS } from '~redux/actions/gif';

export interface GifState {}

const initialState: GifState = {};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_GIF_SUCCESS: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
