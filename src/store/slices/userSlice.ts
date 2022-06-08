import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usernameChange, userState } from "../../types";

/**
 * User initial state
 */
const initialState: userState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

/**
 * Redux slice containing user data from database
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state: userState, action: PayloadAction<userState>) => {
      const userData = action.payload;
      state.email = userData.email;
      state.firstName = userData.firstName;
      state.lastName = userData.lastName;
      state.createdAt = userData.createdAt;
      state.updatedAt = userData.updatedAt;
      state.id = userData.id;
    },
    updateUserData: (
      state: userState,
      action: PayloadAction<usernameChange>
    ) => {
      const newData = action.payload;
      state.firstName = newData.firstName;
      state.lastName = newData.lastName;

      const currentDate = new Date();
      state.updatedAt = currentDate.toISOString();
    },
  },
});

export const { getUserData, updateUserData } = userSlice.actions;
