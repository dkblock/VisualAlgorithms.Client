import { createSlice } from "@reduxjs/toolkit";
import { fetchAlgorithms } from "../actions/algorithms";

const initialState = {
    algorithms: [],
    isFetching: false,
    hasError: false
};

const algorithmsSlice = createSlice({
    name: "algorithmsSlice",
    initialState: initialState,
    extraReducers: {
        [fetchAlgorithms.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchAlgorithms.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.algorithms = action.payload.algorithms;
            state.hasError = action.payload.hasError;
        },
        [fetchAlgorithms.rejected]: (state) => {
            state.isFetching = false;
            state.algorithms = [];
            state.hasError = true;
        }
    }
});

export default algorithmsSlice.reducer;