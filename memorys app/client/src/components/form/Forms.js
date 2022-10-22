import React, { useState } from "react";
import { Button, Paper, TextField, Typography,Box } from "@mui/material";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import {createPost,updatePost} from '../../actions/posts'
import { useSelector } from "react-redux";

const Forms = ({currentId,setcurrentId}) => {
  const [PostData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch()
  const posts = useSelector((state) => currentId? state.Posts.find((p)=>p._id===currentId));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,PostData))
    }else{
      dispatch(createPost(PostData))
    }
  };
  const clear = () => {};

  return (
    <Paper sx={{border:'2px dashed #14e4ff', borderRadius:10, padding:5,display:'flex',justfyContent:"space-between",}}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography>
          <TextField
          sx={{my: 1}}

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
          sx={{my: 1}}
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
          sx={{my: 1}}
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
          sx={{my: 1}}
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
          <Box sx={{display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: "center",
    alignItems: "flex-end",
    mt:1
}}>
          <Button variant="contained" size="large" type="submit">
            submit
          </Button>
          <Button variant="outlined" size="large" onclick={clear}>
            clear
          </Button>
          </Box>
        </Typography>
      </form>
    </Paper>
  );
};
export default Forms;
