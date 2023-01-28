import { Button, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const WritePost = () => {
  return (
    <Box>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="What's happening?"
          inputProps={{ "aria-label": "search google maps" }}
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
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <MusicNoteIcon />
          </Button>

          <Button variant="contained" style={{ background: "#999999" }}>
            Post
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default WritePost;
