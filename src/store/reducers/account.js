import { createSlice } from "@reduxjs/toolkit";
import { auth, login, logout, register } from "../actions/account";

const initialState = {
    currentUser: {},
    isFetching: false
};

const accountSlice = createSlice({
    name: "accountSlice",
    initialState: initialState,
    extraReducers: {
        [auth.pending]: (state) => {
            state.isFetching = true;
        },
        [auth.fulfilled]: (state, { payload: { currentUser } }) => {
            state.currentUser = currentUser;
            state.isFetching = false;
        },
        [auth.rejected]: (state) => {
            state.isFetching = false;
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },
        [login.fulfilled]: (state, { payload: { currentUser } }) => {
            state.currentUser = currentUser;
            state.isFetching = false;
        },
        [login.rejected]: (state) => {
            state.isFetching = false;
        },
        [logout.fulfilled]: (state) => {
            state.currentUser = {};
            state.isFetching = false;
        },
        [register.pending]: (state) => {
            state.isFetching = true;
        },
        [register.fulfilled]: (state, { payload: { currentUser } }) => {
            state.currentUser = currentUser;
            state.isFetching = false;
        },
        [register.rejected]: (state) => {
            state.isFetching = false;
        }
    }
});

export default accountSlice.reducer;