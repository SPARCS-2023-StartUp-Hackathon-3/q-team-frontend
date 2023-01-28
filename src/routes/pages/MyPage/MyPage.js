import Mypagemain from "domain/mypage/Mypagemain";
import React from "react";
import { Routes, Route } from 'react-router-dom';

const MyPage = () => {
  return (    
  <Routes>
    <Route path = "/" element={<Mypagemain/>}/>
  </Routes>
  );
};

export default MyPage;
