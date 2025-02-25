import { configureStore } from "@reduxjs/toolkit";
import mockSlice from "../features/MockFeature/mockSlice";

const store = configureStore({
  reducer: {
    mock: mockSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
