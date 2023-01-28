import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Paper, Skeleton } from "@mui/material";

const MusicCard = () => {
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <Skeleton sx={{ width: 151 }} style={{ margin: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>

        <Paper sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton>
            <PlayArrowIcon />
            <Typography>160K</Typography>
          </IconButton>
          <IconButton>
            <FavoriteIcon />
            <Typography>1,300</Typography>
          </IconButton>
          <IconButton>
            <RepeatIcon />
            <Typography>480</Typography>
          </IconButton>
          <IconButton>
            <Typography>34K</Typography>
          </IconButton>
        </Paper>
      </Box>
    </Card>
  );
};

export default MusicCard;
