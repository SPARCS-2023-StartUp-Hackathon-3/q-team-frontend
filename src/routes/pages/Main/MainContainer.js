import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Feed, PrivateFeed, Search, Upload } from 'domain/main';

const MainContainer = () => {
  return (
    <Routes>
      <Route path = "/" element={<Feed/>}/>
      <Route path = "/privatefeed" element={<PrivateFeed/>}/>
      <Route path = "/search" element={<Search/>}/>
      <Route path = "/upload" element={<Upload/>}/>
    </Routes>
  );
};

export default MainContainer;
