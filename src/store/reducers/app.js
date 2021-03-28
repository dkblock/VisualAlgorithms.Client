import { createSlice } from "@reduxjs/toolkit";
import { setHeader } from "../actions/app";

const initialState = {
    header: "Visual Algorithms"
};

const appSlice = createSlice({
    name: "appSlice",
    initialState: initialState,
    extraReducers: {
        [setHeader]: (state, { payload: { header } }) => {
            state.header = header;
        }
    }
});

export default appSlice.reducer;