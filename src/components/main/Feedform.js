import { Card, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Post, WritePost } from "components/common";
import { useCookies } from "react-cookie";
import axios from "axios";
require("dotenv").config();

const Feedform = (props) => {
  const [cookies, setCookies] = useCookies();
  const [feeds, setFeeds] = useState([]);

  const [selectedTab, setSelectedTab] = useState("0");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    // 전체 api 조회
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER}/api/feeds`, {
        headers: {
          Authorization: `Bearer ${cookies.loginkey}`,
        },
      });

      if (res.status === 200) setFeeds(res.data);

      console.log(res);
    })();
  }, []);

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
          <WritePost
            writePost={props.writePost}
            handleChangeWritePost={props.handleChangeWritePost}
          />
          <br />
          {/* 글 아이템 */}
          {feeds.map((feed, key) => (
            <div key={key}>
              <Post feed={feed} />
              <br />
            </div>
          ))}
        </TabPanel>

        <TabPanel value="1">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Feedform;
