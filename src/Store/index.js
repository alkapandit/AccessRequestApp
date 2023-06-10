import { configureStore } from "@reduxjs/toolkit";
import commomSlice from "./reducer/commomSlice";

const store = configureStore({
  reducer: {
    common: commomSlice,
  },
});

export default store;
