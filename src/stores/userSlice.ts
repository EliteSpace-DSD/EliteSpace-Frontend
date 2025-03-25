import { createSlice } from '@reduxjs/toolkit';

export interface AuthUserState {
  currentUser: string | null;
  fetching: boolean;
}

const initialState: AuthUserState = {
  currentUser: null,
  fetching: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
  },
});

export const { setUser, setFetching } = userSlice.actions;
export default userSlice.reducer;
