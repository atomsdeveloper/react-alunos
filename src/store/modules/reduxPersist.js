// Config Storage of persit Redux to data storage in local storage.
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Function with receive all reducers to persist in local storage.
export const persistedReducer = (reducers) => {
  return persistReducer(
    {
      key: 'LOGIN_REQUEST_POST_API',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
};
