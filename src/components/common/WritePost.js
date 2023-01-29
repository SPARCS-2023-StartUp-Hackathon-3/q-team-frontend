import { Button, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import icon_musicalnotes from "img/icon_musicalnotes.png";

const WritePost = (props) => {
  return (
    <Box sx={{ Width: "100%", backgroundColor: "#F8F8F8", boxShadow: "none", padding: "20px"}}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <InputBase
          className="writepost"
          placeholder="What's happening?"
          sx={{marginBottom: "50px"}}
          name='contents'
          value={props.writePost.contents}
          onChange={props.handleChangeWritePost}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            color="White" 
            sx={{ height: "50px", width: "50px", padding: "0px", minWidth: "0px", boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.19)", borderRadius: "8px"}}
          >
            <img src={icon_musicalnotes} alt="icon_musicalnotes" style={{height: "50%"}} />
          </Button>

          <Button 
            variant="contained" color="Primary1" sx={{color: "#ffffff"}}
            disabled={
              props.writePost.contents && props.writePost.musicfiles ? false : true
            }
          >
            Post
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default WritePost;
