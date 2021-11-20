import { configureStore } from "@reduxjs/toolkit";

import useReducer from "../features/UserSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
