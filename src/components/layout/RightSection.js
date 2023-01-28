import React from 'react';
import sectionright from "img/sectionright.png";

const RightSection = () => {
  return (
    <div style={{ minHeight: "100vh", paddingRight: "10px", width: "100%", backgroundColor: "#EBEBEB"}}>
      <img src={sectionright} alt="sectionright" style = {{ marginTop: "75px", padding: "20px", width: "90%"}}/>
    </div>
  )
};

export default RightSection;