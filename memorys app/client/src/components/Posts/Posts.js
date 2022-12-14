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
function Posts({setcurrentId}) {
  const posts = useSelector((state) => state.Posts);
  console.log(posts, "sdsssdss");
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts?.map((post) => { return(
        <Grid key={post._id} item xs={12} sm={6}>
          {
            console.log(post,"postisss000")
          }
          <Post post={post} setcurrentId={setcurrentId}/>
        </Grid>)
      }
      )}
    </Grid>
  );
}

export default Posts;
