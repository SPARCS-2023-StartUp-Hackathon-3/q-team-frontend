import { Card, Divider, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Post, WritePost } from "components/common";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Feedform = (props) => {
  const [selectedTab, setSelectedTab] = useState("0");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={selectedTab}>
      <Box sx={{ height: "60px", borderBottom: 2, borderColor: "#F2F4FF", boxSizing: 'border-box' }}>
      <Tabs variant="fullWidth" value={selectedTab} textColor="inherit" indicatorColor="primary" onChange={handleChange} aria-label="lab API tabs example">
            <Tab className="tab" label="For you" value="0" />
            <Tab className="tab" label="Tracks" value="1" />
          </Tabs>
        </Box>
        <TabPanel value="0">
          {/* 글 쓰기 란 */}
          <WritePost 
            writePost={props.writePost}
            handleChangeWritePost={props.handleChangeWritePost}
          />
          <br/>
          {/* 글 아이템 */}
          <Post />
          <br/>
          <Post />
        </TabPanel>

        <TabPanel value="1">Item Two</TabPanel>
      </TabContext>
    </Box>
  )
};

export default Feedform;