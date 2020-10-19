import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunk from 'redux-thunk';

import rootReducer, { State } from '~redux/reducers/root';

const middlewares: any = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// redux-persist:
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  }
});

const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  debug: process.env.NODE_ENV !== 'production'
};

const rootReducerPersisted = persistReducer(persistConfig, rootReducer);

// Notes:
// - storage, createWebStorage, createNoopStorage has been introduced
//   to avoid a warning log message shown in the terminal when deploying
//   the next application instead of the storage by default for web browsers
//   as the README docs of the repository on github says of the version: ^6.0.0
//   For more info about this issue please refer to these issues on github:
//   https://github.com/vercel/next.js/discussions/15687
//   https://github.com/rt2zz/redux-persist/issues/1208#issuecomment-658695446

const store = createStore(
  rootReducerPersisted,
  applyMiddleware(...middlewares)
);

const makeStore: MakeStore = (_: Context) => store;

export const persistor = persistStore(store);

export const wrapper = createWrapper<State>(makeStore);
