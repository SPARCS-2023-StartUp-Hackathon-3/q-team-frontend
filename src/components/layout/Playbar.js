import React, { useRef, useState } from "react";
import { Grid, Slider } from "@mui/material";
import { styled, darken } from "@mui/material/styles";
import album from "img/album.png";
import icon_Heart from "img/icon_Heart.png";
import icon_Volume from "img/icon_Volume.png";
import playbutton_1 from "img/playbutton_1.png";
import playbutton_2 from "img/playbutton_2.png";
import playbutton_3 from "img/playbutton_3.png";
import playbutton_4 from "img/playbutton_4.png";
import playbutton_5 from "img/playbutton_5.png";
import axios from "axios";
import { useCookies } from "react-cookie";
require("dotenv").config();

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
    color: ${theme.palette.White.main};
    :hover {
        color: ${darken(theme.palette.White.main, 0.01)};
    }
  `
);

const CustomizedSlider1 = styled(Slider)(
  ({ theme }) => `
color: ${theme.palette.Primary2.main};
:hover {
    color: ${darken(theme.palette.Primary2.main, 0.01)};
}
`
);

const Playbar = () => {
  const [cookies, _] = useCookies(["loginkey"]);
  const [audio, setAudio] = useState("");
  const audioNode = useRef();

  return (
    <>
      <Grid
        container
        className="playbar"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <button
          onClick={async () => {
            const res = await axios.get(
              `${process.env.REACT_APP_SERVER}/api/songs/download?title=wildflower`,
              {
                headers: {
                  Authorization: `Bearer ${cookies.loginkey}`,
                },
                responseType: "blob",
              }
            );
            const blob = new Blob([res.data], { type: "audio/mpeg" });
            setAudio(URL.createObjectURL(blob));
          }}
        >
          음악 요청
        </button>
        ;
        <audio
          controls
          src={audio}
          ref={audioNode}
          type="audio/mpeg"
          hidden={true}
          autoPlay={true}
        ></audio>
        <Grid item container xs={2} md={2} xl={2}>
          <Grid item xs={4} md={4} xl={4}>
            <img src={album} alt="album" style={{ height: "90%" }} />
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Song Title
            </div>
            <div>Artist Name</div>
          </Grid>
          <Grid
            item
            xs={2}
            md={2}
            xl={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <img src={icon_Heart} alt="icon_Heart" style={{ height: "30%" }} />
          </Grid>
        </Grid>
        <Grid item container xs={6} md={6} xl={6}>
          <Grid
            item
            xs={12}
            md={12}
            xl={12}
            alignItems="center"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ marginRight: "15px" }}>00:00</div>
            <CustomizedSlider defaultValue={30} />
            <div style={{ marginLeft: "15px" }}>10:00</div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            xl={12}
            className="playbutton"
            justifyContent="center"
            alignItems="center"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={playbutton_1}
              alt="playbutton_1"
              style={{ height: "50%" }}
            />
            <img
              src={playbutton_2}
              alt="playbutton_2"
              style={{ height: "70%" }}
            />
            <img
              src={playbutton_3}
              alt="playbutton_3"
              style={{ height: "100%" }}
            />
            <img
              src={playbutton_4}
              alt="playbutton_4"
              style={{ height: "70%" }}
            />
            <img
              src={playbutton_5}
              alt="playbutton_5"
              style={{ height: "50%" }}
            />
          </Grid>
        </Grid>
        <Grid item container xs={2} md={2} xl={2} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            xl={12}
            alignItems="center"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={icon_Volume}
              alt="icon_Volume"
              style={{ height: "90%", marginLeft: "60px" }}
            />
            <CustomizedSlider1 defaultValue={30} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Playbar;
