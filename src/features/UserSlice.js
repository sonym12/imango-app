import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    count: 10,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },

    increment: state => {
      return {
        ...state,
        count: state.count + 1
      };
    },

    decrement: state => {
      return {
        ...state,
        count: state.count - 1
      };
    },
  },
});
console.log('userSlice.actions', userSlice.actions);
export const { login, logout, increment, decrement } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
