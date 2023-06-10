import { createSlice } from "@reduxjs/toolkit";
import { setLoadingAction } from "../action/commonActions";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: setLoadingAction,
  },
});

export const { setLoading } = commonSlice.actions;
export default commonSlice.reducer;
