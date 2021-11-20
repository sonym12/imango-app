import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/UserSlice";
import photosReducer from "../features/PhotosSlice";
import questionReducer from "../features/questionSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    photos: photosReducer,
    questions: questionReducer,
  },
});
