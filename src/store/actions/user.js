import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../api/services/user-service";
import statusCode from "../../utils/status-code-reader";
import { hideModal, showModal } from "./modal";
import modalTypes from "../../constants/modal-types";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await userService.fetchUsers();

  if (statusCode.ok(response)) {
    const users = await response.json();
    return { users, hasError: false };
  }

  return { users: [], hasError: true };
});

export const deleteUser = createAsyncThunk("deleteUser", async ({ userId }, thunkAPI) => {
  const response = await userService.deleteUser(userId);
  thunkAPI.dispatch(hideModal());

  if (statusCode.noContent(response)) {
    return { userId, hasError: false };
  }

  return { userId: null, hasError: true };
});

export const updateUser = createAsyncThunk("updateUser", async ({ userId, user }) => {
  const response = await userService.updateUser(userId, user);

  if (statusCode.ok(response)) {
    const updatedUser = await response.json();
    return { updatedUser, hasError: false };
  }

  return { hasError: true };
});

export const showDeleteUserModal = createAsyncThunk("showDeleteUserModal", async ({ user }, thunkAPI) => {
  thunkAPI.dispatch(showModal(modalTypes.deleteUser, { user }));
});
