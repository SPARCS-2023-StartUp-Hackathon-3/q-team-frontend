import React from 'react';
import UploadTracks_page1 from 'img/UploadTracks_page1.png';

const Uploadform = () => {
  return (
    <div sx={{ width: "100%", typography: "body1", textAlign: "center"}}>
      <img
        src={UploadTracks_page1}
        alt='UploadTracks_page1'
        style={{ width: '100%', marginTop: "100px" }}
      />
    </div>
  )
};

export default Uploadform;