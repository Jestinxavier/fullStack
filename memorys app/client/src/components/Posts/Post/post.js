import React from "react";
import {
  Grid,
  CircularProgress,
  Container,
  AppBar,
  Typography,
  Grow,
  styled,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,Box
} from "@mui/material";
import moment from "moment";
import { ThumbUpAlt, Delete, MoreHoriz } from "@mui/icons-material";
function post({post,setcurrentId}) {
  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia  sx={{height:140}}image={post?.selectedFile} title={post.title} >
      {/* <img  src={post.selectedFile} /> */}
      <Box sx={{display:'flex',
      alignContent: 'space-around',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: "space-between",}}>
      <Box>
        <Typography variant="h6">{post.creator}</Typography>
      
      </Box>
      <Box>
        <Button size="small" onClick={() => {
          setcurrentId(post._id)
        }}>
          <MoreHoriz fontSize="small" />
        </Button>
      </Box>
      </Box>
      <Box>
        <Typography variant="body2" >
          {moment(post.createdAt).fromNow()}
        </Typography>
        </Box>
        </CardMedia>
      <Box>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `# ${tag} `)}

        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          {" "}
          <ThumbUpAlt fontSize="small" />
          Like
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          {" "}
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default post;
