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
function post() {
  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title} />
      <Box>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>
      <Box>
        <Button size="small" onClick={() => {}}></Button>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tags) => `# ${tags} `)}
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
