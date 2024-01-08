import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import userReducer from './reducers/userSlice';
import themeReducer from './reducers/themeSlice';
import tweetsReducer from './reducers/tweetsSlice';

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  tweetsReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
