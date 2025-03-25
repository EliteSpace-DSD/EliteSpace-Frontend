import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
export interface AuthUserState {
  currentUser: UserInfo | null;
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
