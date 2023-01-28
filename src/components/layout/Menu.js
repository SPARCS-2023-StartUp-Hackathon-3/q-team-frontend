import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button } from '@mui/material';
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import menuicon1 from "img/menuicon1.png";
import menuicon2 from "img/menuicon2.png";
import menuicon3 from "img/menuicon3.png";
import menuicon4 from "img/menuicon4.png";

const Menu = () => {
  const [cookies, ] = useCookies(["username, profile"]);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <List sx={{ width: '100%', height: '100vh', maxWidth: 360, bgcolor: '#F8F8F8'}}>

      <ListItem style={{ marginTop: "70px", marginBottom: "70px" , display: "flex", flexDirection: "column"}}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Avatar sx={{ width: 60, height: 60 }} src={cookies.profile}/>
          <br/>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: '#999999', fontSize: "18px" }}>Good Morning,</div>
            <div style={{ color: '#000000', fontSize: "20px", fontWeight: "bold" }}>Holmsted{cookies.username}</div>
          </div>
        </div>
        <Button variant="contained" color='Primary1' onClick={()=>{navigate("/mypage/playlist")}}
          sx={{ 
            marginTop: "10px", 
            marginLeft: "50px", 
            color: "white", 
            fontSize: "10px", 
            borderRadius: "8px", 
            height: "28px"}}
          >
            My Playlist
          </Button>
      </ListItem>

      <Divider className="menudivider"/>

      {location.pathname ==="/main"?
      <ListItem>
      <div className="colored_menubox" onClick={()=>{navigate("/main")}}>
        <img src={menuicon1} alt="menuicon1" style={{height: "50%"}}/>
        <div style={{ marginLeft: "10px" }}>Feed</div>
      </div>
      </ListItem>:
      <ListItem>
      <div className="menubox" onClick={()=>{navigate("/main")}}>
        <img src={menuicon1} alt="menuicon1" style={{height: "50%"}}/>
        <div style={{ marginLeft: "10px" }}>Feed</div>
        </div>
      </ListItem>}

      {location.pathname ==="/main/privatefeed"?
      <ListItem>
        <div className="colored_menubox" onClick={()=>{navigate("/main/privatefeed")}}>
          <img src={menuicon2} alt="menuicon2" style={{ margin: "6px", height: "50%"}}/>
          <div style={{ marginLeft: "10px" }}>Private Feed</div>
        </div>
      </ListItem>:
      <ListItem>
      <div className="menubox" onClick={()=>{navigate("/main/privatefeed")}}>
        <img src={menuicon2} alt="menuicon2" style={{ margin: "6px", height: "50%"}}/>
        <div style={{ marginLeft: "10px" }}>Private Feed</div>
      </div>
      </ListItem>}

      <Divider className="menudivider"/>

      {location.pathname ==="/main/search"?
      <ListItem>
        <div className="colored_menubox" onClick={()=>{navigate("/main/search")}}>
          <img src={menuicon3} alt="menuicon3" style={{height: "50%"}}/>
          <div style={{ marginLeft: "10px" }}>Search</div>
        </div>
      </ListItem>:
        <ListItem>
        <div className="menubox" onClick={()=>{navigate("/main/search")}}>
          <img src={menuicon3} alt="menuicon3" style={{height: "50%"}}/>
          <div style={{ marginLeft: "10px" }}>Search</div>
        </div>
      </ListItem>}

      <Divider className="menudivider"/>

      {location.pathname ==="/main/upload"?
      <ListItem>
        <div className="colored_menubox" onClick={()=>{navigate("/main/upload")}}>
          <img src={menuicon4} alt="menuicon4" style={{height: "50%"}}/>
          <div style={{ marginLeft: "10px" }}>Upload Tracks</div>
        </div>
      </ListItem>:
      <ListItem>
        <div className="menubox" onClick={()=>{navigate("/main/upload")}}>
          <img src={menuicon4} alt="menuicon4" style={{height: "50%"}}/>
          <div style={{ marginLeft: "10px" }}>Upload Tracks</div>
        </div>
      </ListItem>}

    </List>
  )
};

export default Menu;