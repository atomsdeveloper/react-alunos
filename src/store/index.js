// Redux store configuration file
import { configureStore } from '@reduxjs/toolkit';
// Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

// Import the root reducer
import rootReducer from './modules/rootReducer';

// Create the saga middleware
// This middleware will allow us to handle side effects in our application
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Run the root saga
// This will start the saga middleware and run the root saga
sagaMiddleware.run(rootSaga);

export default store;
