import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedIssue: '',
};

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    setSelectedIssue: (state, action) => {
      state.selectedIssue = action.payload;
    },
  },
});

export const { setSelectedIssue } = issueSlice.actions;
export default issueSlice.reducer;
