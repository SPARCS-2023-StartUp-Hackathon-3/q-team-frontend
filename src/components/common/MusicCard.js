import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Paper,
  Skeleton,
} from "@mui/material";
import {
  PlayArrowRounded,
  FavoriteRounded,
  RepeatRounded,
  ChatBubbleRounded,
} from "@mui/icons-material";
import icon_HeartOutlined from "img/icon_HeartOutlined.png";
import axios from "axios";

const MusicCard = (props) => {
  return (
    <Card
      className="musiccard"
      sx={{
        display: "flex",
        width: "auto",
        backgroundColor: "#ffffff",
        boxShadow: "none",
        margin: "10px",
      }}
    >
      {/* <Skeleton sx={{ width: 151 }} /> */}
      {console.log(props.musicData)}
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.musicData.coverImageUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ flex: "1 0 auto" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Wrapped around your finger</h1>
            <h2>Post Malon</h2>
          </div>
          <div>
            <img
              src={icon_HeartOutlined}
              alt="icon_HeartOutlined"
              style={{ height: "50%" }}
            />
          </div>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton>
            <PlayArrowRounded color="Gray4" sx={{ fontSize: 22 }} />
            <Typography sx={{ fontSize: 14 }}>160K</Typography>
          </IconButton>
          <IconButton>
            <FavoriteRounded
              color="Gray4"
              sx={{ fontSize: 14, marginRight: "5px" }}
            />
            <Typography sx={{ fontSize: 14 }}>1,300</Typography>
          </IconButton>
          <IconButton>
            <RepeatRounded
              color="Gray4"
              sx={{ fontSize: 14, marginRight: "5px" }}
            />
            <Typography sx={{ fontSize: 14 }}>480</Typography>
          </IconButton>
          <IconButton>
            <ChatBubbleRounded
              color="Gray4"
              sx={{ fontSize: 14, marginRight: "5px" }}
            />
            <Typography sx={{ fontSize: 14 }}>34K</Typography>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default MusicCard;
