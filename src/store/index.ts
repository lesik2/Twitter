import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import userReducer from './reducers/userSlice';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line arrow-body-style
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
