import React, { useState, useEffect } from "react";
import "./Posts.css";
// import firebase from "firebase";
import { db } from "../Firebase";
import { useHistory } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import Post from "./Post.js";
import { selectPosts, setPosts } from '../features/PostsSlice';
import { useDispatch, useSelector } from "react-redux";

function Posts({ user }) {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  console.log("posts", posts);
  const history = useHistory("");

  // if (user === null) {
  //   history.push("/login");
  // }

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        dispatch(setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        ));
      });
  }, []);

  return (
    <div className="posts">
      <ImageUpload username={user?.displayName} />

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          origuser={user?.displayName}
          username={post.username}
          userId={user.uid}
          caption={post.caption}
          imageUrl={post.imageUrl}
          noLikes={post.noLikes}
        />
      ))}
    </div>
  );
}

export default Posts;
