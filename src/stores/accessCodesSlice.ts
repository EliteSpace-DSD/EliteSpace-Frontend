import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCode: null,
  guestName: '',
  timeLimit: '',
};

const accessCodesSlice = createSlice({
  name: 'accessCodes',
  initialState,
  reducers: {
    setGuestName: (state, action) => {
      state.guestName = action.payload;
    },
    setTimeLimit: (state, action) => {
      state.timeLimit = action.payload;
    },
    clearAccessCode: (state) => {
      state.currentCode = null;
      state.guestName = '';
      state.timeLimit = '';
    },
    setCurrentCode: (state, action) => {
      state.currentCode = action.payload;
    },
  },
});

export const { setGuestName, setTimeLimit, clearAccessCode, setCurrentCode } =
  accessCodesSlice.actions;
export default accessCodesSlice.reducer;
