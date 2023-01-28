import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MyFeed, Playlist } from "domain/mypage";

const MyPageContainer = () => {
  return (    
  <Routes>
    <Route path = "/" element={<MyFeed/>}/>
    <Route path = "/playlist" element={<Playlist/>}/>
  </Routes>
  );
};

export default MyPageContainer;
