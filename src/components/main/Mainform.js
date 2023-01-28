import { Card, Divider, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Post, WritePost } from "components/common";

const Mainform = () => {
  const [selectedTab, setSelectedTab] = useState("0");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={selectedTab}>
        <Card sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="For you" value="0" />
            <Tab label="Tracks" value="1" />
          </TabList>
        </Card>
        <TabPanel value="0">
          {/* 글 쓰기 란 */}
          <WritePost />
          <div style={{ marginBottom: "10px" }} />
          {/* 글 아이템 */}
          <Post />
        </TabPanel>

        <TabPanel value="1">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Mainform;
