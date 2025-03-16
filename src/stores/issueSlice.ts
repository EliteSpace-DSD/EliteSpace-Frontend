import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaint: {
    selectedIssue: "",
    extraInfo: "",
  },
};

const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    setSelectedIssue: (state, action) => {
      state.complaint.selectedIssue = action.payload;
    },
    setExtraInfo: (state, action) => {
      state.complaint.extraInfo = action.payload;
    },
  },
});

export const { setSelectedIssue } = issueSlice.actions;
export default issueSlice.reducer;
