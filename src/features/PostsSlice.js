import { createSlice } from "@reduxjs/toolkit";

export const PostsSlice = createSlice({
  name: "posts",
  
  initialState: {
    posts: [],
    allPostsComments: []
  },
  
  reducers: {
    setPosts: (state, action) => {
      console.log("aca", action.payload);
      state.posts = action.payload;
    },
    setAllPostsComments: (state, action) => {
      console.log("acadd", action.payload);
      state.allPostsComments.push(action.payload);
    },
  },
});

export const { setPosts, setAllPostsComments } = PostsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectComments = (state) => state.posts.allPostsComments;

export default PostsSlice.reducer;
