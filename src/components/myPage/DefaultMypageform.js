import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button } from '@mui/material';
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from 'react-router-dom';
import Mypage_page1 from "img/Mypage_page1.png";

const DefaultMypageform = () => {
  const [cookies, ] = useCookies(["username, profile"]);
  const navigate = useNavigate();

  return (
    <div sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src={Mypage_page1}
        alt='Mypage_page1'
        style={{ width: '80%', marginTop: "100px", marginLeft: "80px"}}
      />
      {/* <ListItem style={{ marginTop: "70px", marginBottom: "70px" , display: "flex", flexDirection: "column"}}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Avatar sx={{ width: 180, height: 180 }} src={cookies.profile} onClick={()=>{navigate("/mypage")}}/>
          <br/>
          <div style={{ marginLeft: "10px" }}>
          <div style={{ color: '#000000', fontSize: "36px", fontWeight: "bold" }}>Holmsted{cookies.username}</div>
            <div style={{ color: '#999999', fontSize: "30px" }}>SOFA,</div>
            <div style={{ color: '#999999', fontSize: "30px" }}>Kr FROM SEOUL</div>
          </div>
        </div>
        <Button variant="outlined" color='Primary1' onClick={()=>{navigate("/mypage/edit")}}
          sx={{ 
            marginTop: "10px", 
            marginLeft: "50px", 
            color: "#242F9B", 
            fontSize: "10px", 
            borderRadius: "8px", 
            height: "28px"}}
          >
            Edit Profile
          </Button>
      </ListItem> */}
    </div>
  )
};

export default DefaultMypageform;