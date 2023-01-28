import React, { useState } from "react";
import logo from "img/logo.png";
import { InputAdornment, Input, Avatar, Grid, Box, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Menu, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { AccountCircle, Mail, Notifications, MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    borderRadius: "4px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'Black',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Topbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["loginkey"]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickLogout = () => {
    removeCookie("loginkey", { path: "/" });
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="topbar" color="Primary1" position="static">
        <Toolbar>
            <img className="logo" src={logo} alt="React" onClick={()=>{navigate('/main')}}/>
            <Box sx={{ flexGrow: 1, color: "#ffffff" }} />
            <Search>
                <SearchIconWrapper>
                <SearchIcon color="Black"/>
                </SearchIconWrapper>
                <StyledInputBase 
                // sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "4px" }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                size="large"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                color="inherit"
                >
                <Badge badgeContent={17} color="Red">
                    <Notifications color="White"/>
                </Badge>
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <div className='menu_user_name' onClick={handleClickProfile}>
                    <IconButton
                        size="large"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        color="inherit"
                    >
                    <AccountCircle color="White"/>
                    </IconButton>
                </div>
            </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="profile_menu"
      >
        <MenuItem onClick={() => navigate(`/user/dashboard`)}>설정</MenuItem>
        <MenuItem onClick={handleClickLogout}>로그아웃</MenuItem>
      </Menu>
    </Box>
    // <Grid className="Menu">
    //   <Grid className="nav">
    //     <img className="logo" src={logo} alt="React" onClick={()=>{navigate('/main')}}/>
    //     <div className="navbar" onClick={()=>{navigate('/aboutus')}}>{Cookies.state}</div>
    //   </Grid>
    // </Grid>
  );
};

export default Topbar;
