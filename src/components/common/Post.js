import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { RepeatRounded, ChatBubbleRounded } from "@mui/icons-material";
import { MusicCard } from ".";

const Post = (props) => {
  return (
    <Card sx={{ Width: "100%", backgroundColor: "#F8F8F8", boxShadow: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 45, height: 45 }} src={null} />
        <div className="PostInfo" style={{ marginLeft: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1>Post Malone</h1>
            <h2>@ImMalone</h2>
            <h3>・6 hours ago</h3>
          </div>
          {console.log(props.feed.content)}
          <p>{props.feed.content}</p>
        </div>
      </div>

      <MusicCard musicData={props.feed.Song[0]} />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ChatBubbleRounded
            color="Primary1"
            sx={{ fontSize: 24, marginRight: "5px" }}
          />
          <Typography>258</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <RepeatRounded
            color="Primary1"
            sx={{ fontSize: 24, marginRight: "5px" }}
          />
          <Typography>88</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
