import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MockState = {
  mockArray: string[];
};

const state: MockState = {
  mockArray: ['Bob', 'Eddie', 'Felipe'],
};

const mockSlice = createSlice({
  name: 'mock',
  initialState: state,
  reducers: {
    addPerson: (state, action: PayloadAction<string>) => {
      const newPerson = action.payload;
      state.mockArray.push(newPerson);
    },
  },
});

export const { addPerson } = mockSlice.actions;
export default mockSlice.reducer;
