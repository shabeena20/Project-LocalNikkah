import { configureStore } from '@reduxjs/toolkit';
import progressReducer from './Slice/progressSlice';

export const store = configureStore({
  reducer: {
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
