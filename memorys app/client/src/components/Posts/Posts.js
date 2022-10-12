import React from "react";
import Post from "./Post/post";

import {
  Grid,
  CircularProgress,
  Container,
  AppBar,
  Typography,
  Grow,
  styled,
} from "@mui/material";

import { useSelector } from "react-redux";
function Posts() {
  const posts = useSelector((state) => state.Posts);
  console.log(posts, "sdsssdss");
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
