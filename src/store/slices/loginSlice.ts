import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginState } from "../../types";

/**
 * Login initial state
 */
const initialState: loginState = {
  isLoggedIn: false,
  token: "",
};

/**
 * Redux slice containing login data
 */
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state: loginState, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state: loginState) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
