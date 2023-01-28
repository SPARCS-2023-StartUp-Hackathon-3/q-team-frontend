import React from 'react';
import { Grid } from '@mui/material';
import { DefaultMypageform, MyFeedform } from 'components/mypage';
import { Topbar, Playbar, Menu, RightSection } from "components/layout";

const MyFeed = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
        <Topbar item xs={12} md={12} xl={12} />
        <Grid item container xs={12} md={10} xl={9} sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={2} md={2} xl={2}>
            <Menu />
        </Grid>
        <Grid item xs={7} md={7} xl={7}>
            <DefaultMypageform />
            <MyFeedform />
        </Grid>
        <Grid item xs={3} md={3} xl={3}>
            <RightSection />
        </Grid>
        </Grid>
        <Playbar />
    </Grid>
  )
};

export default MyFeed;