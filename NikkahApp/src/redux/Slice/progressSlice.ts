import { createSlice } from '@reduxjs/toolkit';

interface ProgressState {
  value: number;
  totalSteps: number;
}

const initialState: ProgressState = {
  value: 0,
  totalSteps: 8,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    incrementProgress: (state) => {
      const stepValue = 1 / state.totalSteps;
      state.value = Math.min(state.value + stepValue, 1);
    },
    decrementProgress: (state) => {
      const stepValue = 1 / state.totalSteps;
      state.value = Math.max(state.value - stepValue, 0);
    },
    resetProgress: (state) => {
      state.value = 0;
    },
    setTotalSteps: (state, action) => {
      state.totalSteps = action.payload;
    },
  },
});

export const { incrementProgress, decrementProgress, resetProgress, setTotalSteps } = progressSlice.actions;
export default progressSlice.reducer;
