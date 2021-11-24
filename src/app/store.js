import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/UserSlice";
import postsReducer from "../features/PostsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});
