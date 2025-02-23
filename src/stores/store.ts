import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export type Rootstate = ReturnType<typeof store.getState>;

export default store;
