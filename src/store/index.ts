import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import firebaseReducer from './reducers/fireBaseSlice';

const rootReducer = combineReducers({
  firebaseReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line arrow-body-style
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat( );
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
