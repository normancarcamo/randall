import { Dispatch } from 'redux';

// Types:
export const SEARCH_GIF = 'SEARCH_GIF';
export const SEARCH_GIF_SUCCESS = 'SEARCH_GIF_SUCCESS';

const BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=OMTZr6f9VU3h84DD99m6JpzMBrJyQJHI';

// Thunks:
export const searchGifAction = (term: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SEARCH_GIF });

  const response = await fetch(BASE_URL + term, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (data.error) {
    // dispatch({ type: LOGIN_USER_ERROR_ACTION, payload: data.error });
  } else {
    // dispatch({
    //   type: LOGIN_USER_SUCCESS_ACTION,
    //   access_token: data.access_token,
    //   refresh_token: data.refresh_token
    // });
  }

  return data;
};
