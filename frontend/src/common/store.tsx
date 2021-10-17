import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./alertSlice";

/**
 * Create a redux store with the given reducers
 *
 * https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore
 */
const store = configureStore({
  reducer: {
    alertStore: alertReducer,
  },
});

export default store;

// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;