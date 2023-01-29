import React, { useState } from "react";
import { Grid } from '@mui/material';
import { Feedform } from "components/main";
import { Topbar, Playbar, Menu, RightSection } from "components/layout";

const Feed = () => {

  const [writePost, setWritePost] = useState({
    contents: "",
    musicfiles: "",
  });

  const handleChangeWritePost = (event) => {
    let changeWritePost = { ...writePost };
    changeWritePost[event.target.name] = event.target.value;
    setWritePost(changeWritePost);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Topbar item xs={12} md={12} xl={12} />
      <Grid item container xs={12} md={10} xl={9} sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={2} md={2} xl={2}>
          <Menu />
        </Grid>
        <Grid item xs={7} md={7} xl={7}>
          <Feedform 
            writePost={writePost}
            handleChangeWritePost={handleChangeWritePost}
          />
        </Grid>
        <Grid item xs={3} md={3} xl={3}>
          <RightSection />
        </Grid>
      </Grid>
      <Playbar />
    </Grid>
  );
};

export default Feed;
