import React from 'react';
import { Grid } from '@mui/material';

const Playbar = () => {
  return (
    <Grid container className="playbar" sx={{ flexGrow: 1 }}>
        <Grid item xl={2}>
            곡 정보
        </Grid>
        <Grid item xl={6}>
            재생 정보
        </Grid>
        <Grid item xl={2}>
            볼륨 정보
        </Grid>
    <div>dd</div>
    </Grid>
  )
};

export default Playbar;