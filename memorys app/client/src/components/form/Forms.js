import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'
const Forms = () => {
  const [PostData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(PostData))
  };
  const clear = () => {};

  return (
    <Paper>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography>
          <TextField
            id="creator"
            fullWidth
            onChange={(e) =>
              setPostData({ ...PostData, creator: e.target.value })
            }
            name="creator"
            label="creator"
            variant="outlined"
          />
          <TextField
            id="title"
            fullWidth
            onChange={(e) =>
              setPostData({ ...PostData, title: e.target.value })
            }
            name="title"
            label="Title"
            variant="outlined"
          />
          <TextField
            id="message"
            fullWidth
            onChange={(e) =>
              setPostData({ ...PostData, message: e.target.value })
            }
            name="message"
            label="Message"
            variant="outlined"
          />
          <TextField
            id="tags"
            fullWidth
            onChange={(e) => setPostData({ ...PostData, tags: e.target.value })}
            name="tags"
            label="Tags"
            variant="outlined"
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...PostData, selectedFile: base64 })
              }
            />
          </div>

          <Button variant="contained" size="large" type="submit">
            submit
          </Button>
          <Button variant="outlined" size="large" onclick={clear}>
            clear
          </Button>
        </Typography>
      </form>
    </Paper>
  );
};
export default Forms;
