// Redux store configuration file
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';

// Configure the Redux store
export default configureStore({
  reducer: rootReducer,
});
