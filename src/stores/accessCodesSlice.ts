import { createSlice } from '@reduxjs/toolkit';

// define initial state. null b/c nothing generated yet. string is empty strings
const initialState = {
  currentCode: null,
  guestName: '',
  timeLimit: '',
};

const accessCodesSlice = createSlice({
  name: 'accessCodes',
  initialState,
  // reducers - > object containing reducer runctions that will update state
  reducers: {
    // when this is dispatched, it will update guestName in the sate w/ whatever value was passed in action payload
    setGuestName: (state, action) => {
      state.guestName = action.payload;
    },
    setTimeLimit: (state, action) => {
      state.timeLimit = action.payload;
    },
    // need this to reset to initial values (empty andnull). cause what if we need a new one
    clearAccessCode: (state) => {
      state.currentCode = null;
      state.guestName = '';
      state.timeLimit = '';
    },
    // update currentCode (null) state w/ generated one from API
    setCurrentCode: (state, action) => {
      state.currentCode = action.payload;
    },
  },
});

export const { setGuestName, setTimeLimit, clearAccessCode, setCurrentCode } =
  accessCodesSlice.actions;
export default accessCodesSlice.reducer;
