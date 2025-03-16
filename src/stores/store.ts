import { configureStore } from "@reduxjs/toolkit";
import mockSlice from "../features/MockFeature/mockSlice";
import issueReducer from "./issueSlice";
import { userApi } from "../features/Services/userSlice";
import { loginApi } from "../features/Login/api/loginApi";

const store = configureStore({
  reducer: {
    mock: mockSlice,
    issue: issueReducer,
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
