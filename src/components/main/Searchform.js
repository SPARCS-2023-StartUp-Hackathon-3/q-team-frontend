import React, { useState } from 'react';
import { Tab, Tabs, Typography, Box, AppBar, Toolbar, IconButton, InputBase, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Post, WritePost } from "components/common";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Search_page1 from 'img/Search_page1.png';
import Search_page2 from 'img/Search_page2.png';
import Search_page3 from 'img/Search_page3.png';
import Search_page4 from 'img/Search_page4.png';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.black, 0.08),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  borderRadius: "4px",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: "40px",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "Black",
  "& .MuiInputBase-input": {
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


const Searchform = () => {
  const [selectedTab, setSelectedTab] = useState("0");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div sx={{ width: "100%" }}>
      <Search sx={{ marginTop: "40px" }}>
        <SearchIconWrapper>
          <SearchIcon color="Black" />
        </SearchIconWrapper>
        <StyledInputBase
          // sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "4px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <br/>
      <Divider/>

      <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={selectedTab}>
        <Box sx={{ height: "60px", borderBottom: 2, borderColor: "#F2F4FF", boxSizing: 'border-box' }}>
          <Tabs variant="fullWidth" value={selectedTab} textColor="inherit" indicatorColor="primary" onChange={handleChange} aria-label="lab API tabs example">
            <Tab className="tab" label="For you" value="0" />
            <Tab className="tab" label="Tracks" value="1" />
            <Tab className="tab" label="Profile" value="2" />
            <Tab className="tab" label="Posts" value="3" />
          </Tabs>
        </Box>
        <TabPanel value="0" sx={{textAlign: "center"}}>
          <img
            src={Search_page1}
            alt='Search_page1'
            style={{ width: '80%' }}
          />
        </TabPanel>
        <TabPanel value="1" sx={{textAlign: "center"}}>
          <img
            src={Search_page2}
            alt='Search_page1'
            style={{ width: '80%' }}
          />
        </TabPanel>
        <TabPanel value="2" sx={{textAlign: "center"}}>
          <img
            src={Search_page3}
            alt='Search_page1'
            style={{ width: '80%' }}
          />
        </TabPanel>
        <TabPanel value="3" sx={{textAlign: "center"}}>
          <img
            src={Search_page4}
            alt='Search_page1'
            style={{ width: '80%' }}
          />
        </TabPanel>
      </TabContext>
    </Box>

    </div>
  )
};

export default Searchform;