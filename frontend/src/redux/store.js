import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice';

const store = configureStore({
  reducer: {
    customers: customerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
